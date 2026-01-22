import { defineConfig } from 'drizzle-kit'
import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from './src/constants/env'

export default defineConfig({
  out: './drizzle',
  schema: './src/db/schema.ts',
  dialect: 'turso',
  dbCredentials: {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    url: TURSO_DATABASE_URL!,
    authToken: TURSO_AUTH_TOKEN
  }
})
