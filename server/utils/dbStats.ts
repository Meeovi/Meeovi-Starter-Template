// Minimal dbStats shim for development environment
export async function getDBStats() {
  // TODO: implement real DB statistics gathering (drizzle / prisma)
  return {
    uptime: process.uptime(),
    tables: {}
  }
}

export default { getDBStats }
