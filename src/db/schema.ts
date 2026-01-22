import { sql } from 'drizzle-orm'
import {
  blob,
  integer,
  numeric,
  sqliteTable,
  text
} from 'drizzle-orm/sqlite-core'

export const apps = sqliteTable('Apps', {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text(),
  alternativeText: text(),
  githubRepoName: text(),
  osArray: blob(),
  descriptions: blob(),
  logoUrl: text(),
  inDevelopment: numeric('in_development').default(sql`(TRUE)`)
})
