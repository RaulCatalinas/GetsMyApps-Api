// Constants
import { TURSO_AUTH_TOKEN, TURSO_DATABASE_URL } from '../constants/env'

// DB
import { createClient } from '@libsql/client'
import { drizzle } from 'drizzle-orm/libsql'

const client = createClient({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  url: TURSO_DATABASE_URL!,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  authToken: TURSO_AUTH_TOKEN!
})

export const db = drizzle(client)
