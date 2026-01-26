import type { SQL } from 'drizzle-orm'
import { z } from 'zod'
import { isValidTable, useDB } from '../../../utils/db'
import { filterSchema, processFilters, withFilters } from '../../../utils/query'
import { createError } from '#imports'
import { eventHandler, getValidatedQuery, getValidatedRouterParams } from 'h3'

const sortSchema = z.array(
  z.tuple([
    z.string(),
    z.enum(['asc', 'desc'])
  ])
)

const pathSchema = z.object({ tableName: z.string().min(1) })

const querySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
  filter: z.string()
    .transform((str) => {
      try {
        const parsed = JSON.parse(str)
        if (!Array.isArray(parsed)) return []
        return parsed.reduce<z.infer<typeof filterSchema>>((validFilters, item) => {
          const result = filterSchema.element.safeParse(item)
          if (result.success) validFilters.push(result.data)
          return validFilters
        }, [])
      } catch {
        return []
      }
    })
    .optional(),
  sort: z.string()
    .transform((str) => {
      try {
        const parsed = JSON.parse(str)
        if (!Array.isArray(parsed)) return []
        return parsed.reduce<z.infer<typeof sortSchema>>((validSorts, item) => {
          const result = sortSchema.element.safeParse(item)
          if (result.success) validSorts.push(result.data)
          return validSorts
        }, [])
      } catch {
        return []
      }
    })
    .optional(),
  with: z.string()
    .transform((str) => {
      try {
        const parsed = JSON.parse(str)
        if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return undefined
        return parsed
      } catch {
        return undefined
      }
    })
    .optional()
})

export default eventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, pathSchema.parse)
  const query = await getValidatedQuery(event, querySchema.parse)

  const { tableName } = params
  if (!isValidTable(tableName)) {
    throw createError({ statusCode: 400, statusMessage: 'Bad Request', data: 'INVALID_TABLE_NAME', message: 'Invalid Table Name' })
  }

  const db = await useDB(event)

  const page = query?.page || 1
  const limit = query?.limit || 20
  const skip = (page - 1) * limit

  const where = query?.filter ? withFilters(undefined as any, processFilters(query.filter)) : undefined

  // Build orderBy (no schema introspection — invalid fields will error and be handled)
  let orderBy: any = undefined
  if (query?.sort?.length) {
    const ord: any[] = []
    for (const [field, direction] of query.sort) {
      ord.push({ [field]: direction })
    }
    if (ord.length) orderBy = ord
  } else {
    orderBy = [{ id: 'desc' }]
  }

  const include = query?.with ?? undefined

  const model = (db as any)[tableName]
  try {
    const total = await model.count({ where })
    const result = await model.findMany({ where, orderBy, take: limit, skip, include })
    return {
      data: result,
      total,
      page,
      limit
    }
  } catch (err: any) {
    throw createError({ statusCode: 400, statusMessage: 'Bad Request', data: 'INVALID_QUERY', message: err?.message || 'Invalid query' })
  }
})
