import { createError, defineEventHandler } from 'h3'
import { getRouterParam } from 'h3'
import { requireAuth } from '../../utils/auth'
import { FileService, useFileManagerConfig } from '../../services/file/fileService'
import { createStorageProvider } from '../../services/file/storage/factory'

export default defineEventHandler(async (event) => {
  const config = useFileManagerConfig()
  const user = await requireAuth(event)
  const fileId = getRouterParam(event, 'id')

  if (!fileId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'File ID is required'
    })
  }
  const storage = await createStorageProvider(config.storage)
  const fileService = new FileService(storage)

  const file = await fileService.getFile(fileId)

  if (!file) {
    throw createError({
      statusCode: 404,
      statusMessage: 'File not found'
    })
  }

  const fileOwner = (file as any).uploaded_by ?? (file as any).uploadedBy
  if (fileOwner !== user.id && user.role !== 'admin') {
    throw createError({ statusCode: 403, statusMessage: 'Access denied' })
  }

  const deleted = await fileService.deleteFile(fileId)

  return {
    success: deleted,
    message: deleted ? 'File deleted successfully' : 'File not found'
  }
})
