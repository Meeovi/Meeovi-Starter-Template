import { requireAuth } from '../utils/auth'
import { createError, defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const path = event.path

  if (path?.startsWith('/api/dashboard')) {
    const user = await requireAuth(event)
    if (user.role !== 'seller') {
      throw createError({
        statusCode: 403,
        statusMessage: 'Forbidden',
        message: 'Admin access required.'
      })
    }
  }
})
