import { blob, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod'

export const appsSchema = sqliteTable('Apps', {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  alternativeText: text().notNull(),
  githubRepoName: text().notNull(),
  osArray: blob({ mode: 'json' }).$type<string[]>().notNull(),
  descriptions: blob({ mode: 'json' })
    .$type<{ en: string; es: string }>()
    .notNull(),
  logoUrl: text(),
  inDevelopment: integer('in_development', { mode: 'boolean' }).default(true)
})

export const insertAppSchema = createInsertSchema(appsSchema)
export const updateAppSchema = createUpdateSchema(appsSchema)
