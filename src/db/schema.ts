import { blob, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod'

export const appsSchema = sqliteTable('Apps', {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  alternativeText: text('alternative_text').notNull(),
  githubRepoName: text('github_repo_name').notNull(),
  osArray: blob('os_array', { mode: 'json' }).$type<string[]>().notNull(),
  descriptions: blob({ mode: 'json' })
    .$type<{ en: string; es: string }>()
    .notNull(),
  logoUrl: text('logo_url'),
  inDevelopment: integer('in_development', { mode: 'boolean' })
    .default(true)
    .notNull(),
  downloadUrls: blob('download_urls', { mode: 'json' })
    .$type<{
      windows?: string
      macos?: string
      linux?: string
      android?: string
      ios?: string
    }>()
    .default({}),
  isFeatured: integer('is_featured', { mode: 'boolean' })
    .default(false)
    .notNull()
})

export const insertAppSchema = createInsertSchema(appsSchema)
export const updateAppSchema = createUpdateSchema(appsSchema)
