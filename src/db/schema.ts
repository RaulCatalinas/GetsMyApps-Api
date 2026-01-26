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
  inDevelopment: integer('in_development', { mode: 'boolean' })
    .notNull()
    .default(true),
  downloadUrls: blob({ mode: 'json' })
    .$type<{
      windows?: string
      macos?: string
      linux?: string
      android?: string
      ios?: string
    }>()
    .default({})
})

export const insertAppSchema = createInsertSchema(appsSchema)
export const updateAppSchema = createUpdateSchema(appsSchema)
