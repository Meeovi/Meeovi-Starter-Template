import { useDB } from '../../../utils/db'
import { ensurePolarCustomer } from '../../../utils/polar'
import { runtimeConfig } from '../../../utils/runtimeConfig'
import { ensureStripeCustomer } from '../../../utils/stripe'

export default defineEventHandler(async (event) => {
  const db = await useDB(event)

  // Get all users from database
  const users = await (db as any).profiles.findMany()

  const results = {
    totalUsers: users.length,
    stripeResults: [] as Array<{ userId: string, status: 'success' | 'error', message?: string }>,
    polarResults: [] as Array<{ userId: string, status: 'success' | 'error', message?: string }>
  }

  // Process each user
  for (const user of users) {
    // Ensure Stripe customer if Stripe is enabled
    if (runtimeConfig.public.payment === 'stripe' && runtimeConfig.stripeSecretKey) {
      if (user.stripeCustomerId) {
        results.stripeResults.push({
          userId: user.id,
          status: 'success'
        })
        continue
      }
      try {
        const customer = await ensureStripeCustomer(user)
        if (customer) {
          await (db as any).profiles.update({ where: { id: user.id }, data: { stripeCustomerId: customer.id } })
        }
        results.stripeResults.push({
          userId: user.id,
          status: 'success'
        })
      } catch (error) {
        results.stripeResults.push({
          userId: user.id,
          status: 'error',
          message: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }

    // Ensure Polar customer if Polar is enabled
    if (runtimeConfig.public.payment === 'polar' && runtimeConfig.polarAccessToken) {
      if (user.polarCustomerId) {
        results.polarResults.push({
          userId: user.id,
          status: 'success'
        })
        continue
      }
      try {
        const customer = await ensurePolarCustomer(user)
        if (customer && customer.externalId) {
          await (db as any).profiles.update({ where: { id: user.id }, data: { polarCustomerId: customer.id } })
        }
        results.polarResults.push({
          userId: user.id,
          status: 'success'
        })
      } catch (error) {
        results.polarResults.push({
          userId: user.id,
          status: 'error',
          message: error instanceof Error ? error.message : 'Unknown error'
        })
      }
    }
  }

  return {
    success: true,
    data: results,
    summary: {
      totalUsers: results.totalUsers,
      stripeSuccessCount: results.stripeResults.filter(r => r.status === 'success').length,
      stripeErrorCount: results.stripeResults.filter(r => r.status === 'error').length,
      polarSuccessCount: results.polarResults.filter(r => r.status === 'success').length,
      polarErrorCount: results.polarResults.filter(r => r.status === 'error').length
    }
  }
})
