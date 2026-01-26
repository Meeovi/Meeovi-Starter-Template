import { defineEventHandler, toWebRequest } from 'h3'
import { useServerAuth } from '../../utils/auth'

export default defineEventHandler((event) => {
  const serverAuth = useServerAuth()
  return serverAuth.handler(toWebRequest(event))
})
