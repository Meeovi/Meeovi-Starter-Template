import type { PgColumn } from 'drizzle-orm/pg-core'
import { z } from 'zod'
import { isValidTable, useDB } from '../../../../utils/db'
import { filterSchema, processFilters, withFilters } from '../../../../utils/query'
import { createError } from '#imports'
import { eventHandler, getValidatedQuery, getValidatedRouterParams } from 'h3'

const pathSchema = z.object({
  tableName: z.string().min(1),
  columnName: z.string().min(1)
})

const querySchema = z.object({
  filter: z.string()
    .transform((str) => {
      try {
        const parsed = JSON.parse(str)
        if (!Array.isArray(parsed))
          return []

        return parsed.reduce<z.infer<typeof filterSchema>>((validFilters, item) => {
          const result = filterSchema.element.safeParse(item)
          if (result.success) {
            validFilters.push(result.data)
          }
          return validFilters
        }, [])
      }
      catch {
        return []
      }
    })
    .optional()
})

export default eventHandler(async (event) => {
  const params = await getValidatedRouterParams(event, pathSchema.parse)
  const query = await getValidatedQuery(event, querySchema.parse)

  const { tableName, columnName } = params
  if (!isValidTable(tableName)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Bad Request',
      data: 'INVALID_TABLE_NAME',
      message: 'Invalid Table Name'
    })
  }

  const db = await useDB(event)

  const where = query?.filter ? withFilters(undefined as any, processFilters(query.filter)) : undefined

  const model = (db as any)[tableName]
  try {
    const groups = await model.groupBy({ by: [columnName], where, _count: { _all: true } as any })
    return groups.map((g: any) => ({ [columnName]: g[columnName], count: g._count?._all ?? 0 }))
  } catch (err: any) {
    throw createError({ statusCode: 400, statusMessage: 'Bad Request', data: 'INVALID_QUERY', message: err?.message || 'Invalid query' })
  }
})
