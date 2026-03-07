import { composeConfig, gatewayConfig } from '../../mesh.config'
import { createHandler } from '@mframework/api'

const handler = createHandler(composeConfig, gatewayConfig)

export default defineEventHandler(async (event) => {
  const req = {
    headers: getRequestHeaders(event),
    cookies: parseCookies(event),
    body: await readBody(event)
  }

  const res: any = {
    headers: {},
    statusCode: 200,
    setHeader(k: string, v: string) {
      this.headers[k] = v
    },
    end(payload: string) {
      for (const [k, v] of Object.entries(this.headers)) {
        event.node.res.setHeader(k, v as string)
      }
      event.node.res.statusCode = this.statusCode
      event.node.res.end(payload)
    }
  }

  return handler(req, res)
})
