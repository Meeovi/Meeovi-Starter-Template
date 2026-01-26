import { getDBStats } from '../../../utils/dbStats'

export default defineEventHandler(async () => {
  return getDBStats()
})
