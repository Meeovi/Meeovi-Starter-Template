import "dotenv/config";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@meeovi/layer-shared/prisma/generated/client";
import { PrismaPg } from '@prisma/adapter-pg';

const adapter = new PrismaPg({
  connectionString: process.env.NUXT_DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

export const auth = betterAuth({
  experimental: { joins: true },
  database: prismaAdapter(prisma, { provider: "postgresql" }),
  emailAndPassword: { enabled: true },
});

// Export a type alias for the runtime `auth` instance so other (type-only)
// modules can reference its type without importing the value at runtime.
export type Auth = typeof auth;
