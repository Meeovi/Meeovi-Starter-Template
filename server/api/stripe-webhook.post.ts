import { defineEventHandler, readRawBody } from 'h3'
import Stripe from 'stripe'
import { createDirectus, rest, updateItem } from '@meeovi/directus-client'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig() as any
  const stripeSecret = config.private?.stripe?.secret || process.env.STRIPE_SECRET || ''
  const webhookSecret = config.private?.stripe?.webhookSecret || process.env.STRIPE_WEBHOOK_SECRET || ''

  if (!stripeSecret || !webhookSecret) {
    // Misconfigured
    return { status: 500, error: 'Stripe secrets not configured on server' }
  }

  const rawBody = await readRawBody(event)
  const signatureHeader = event.node.req.headers['stripe-signature'] || event.node.req.headers['Stripe-Signature']
  const signature = Array.isArray(signatureHeader) ? signatureHeader[0] : signatureHeader
  if (!signature) {
    console.error('Missing stripe signature header')
    return { status: 400, error: 'Missing stripe signature header' }
  }

  const stripe = new Stripe(stripeSecret, { apiVersion: '2025-12-15.clover' })

  let stripeEvent: Stripe.Event
  try {
    stripeEvent = stripe.webhooks.constructEvent(rawBody as string | Buffer, signature as string, webhookSecret as string)
  } catch (err: any) {
    // Invalid signature
    console.error('Stripe webhook signature verification failed:', err?.message || err)
    return { status: 400, error: 'Webhook signature verification failed' }
  }

  try {
    if (stripeEvent.type === 'checkout.session.completed') {
      const session = stripeEvent.data.object as Stripe.Checkout.Session
      const cartId = session.metadata?.cart_id || session.metadata?.cartId || null

      if (cartId) {
        // Mark cart as paid in Directus
        const directus = createDirectus(config.public.directus.url).with(rest())
        const payload: any = {
          status: 'paid',
          paid_at: new Date().toISOString(),
          stripe_session_id: session.id,
          stripe_payment_intent: session.payment_intent || null
        }
        try {
          await directus.request(updateItem('cart', cartId, payload))
          console.log(`Marked cart ${cartId} as paid`)
        } catch (e) {
          console.error('Failed updating cart after webhook:', e)
        }
      }
    }
  } catch (e) {
    console.error('Error handling Stripe webhook event:', e)
    return { status: 500, error: 'Webhook handling error' }
  }

  return { received: true }
})
