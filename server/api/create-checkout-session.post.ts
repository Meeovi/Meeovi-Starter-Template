import { createError, defineEventHandler, readBody } from 'h3'
import { createDirectus, rest, readItem } from '@meeovi/directus-client'
import Stripe from 'stripe'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const body = await readBody(event)
  const cartId = body?.cartId
  const origin = body?.origin || `${event.node.req.headers.origin || ''}`

  if (!cartId) {
    return { error: 'cartId is required' }
  }

  const directusUrl = (config.public.directus as any)?.url
  if (!directusUrl) {
    throw createError({ statusCode: 500, message: 'Directus URL not configured' })
  }

  const directus = createDirectus(directusUrl).with(rest())

  // Load cart and items
  const cart = await directus.request(readItem('cart', cartId, { fields: ['*', 'items.*', 'items.product.*'] }))
  if (!cart) return { error: 'Cart not found' }

  const stripeSecret = (config as any).stripe?.secretKey || (config as any).private?.stripe?.secret || process.env.STRIPE_SECRET || ''
  if (!stripeSecret) return { error: 'Stripe secret not configured' }

  const stripe = new Stripe(stripeSecret, { apiVersion: '2025-12-15.clover' })

  const currency = (cart.currency || 'USD').toLowerCase()

  const line_items = (cart.items || []).map((item: any) => ({
    price_data: {
      currency,
      product_data: {
        name: item.product?.name || `Product ${item.product_id}`
      },
      unit_amount: Math.round((item.price || 0) * 100)
    },
    quantity: item.quantity || 1
  }))

  // Add shipping as a separate line if present
  const shippingAmount = Number(cart.shipping_amount || 0)
  if (shippingAmount > 0) {
    line_items.push({
      price_data: {
        currency,
        product_data: { name: 'Shipping' },
        unit_amount: Math.round(shippingAmount * 100)
      },
      quantity: 1
    })
  }

  // Create the Checkout Session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items,
    success_url: `${origin}/checkout/confirmation?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
    metadata: { cart_id: String(cart.id) }
  })

  return { id: session.id, url: session.url }
})
