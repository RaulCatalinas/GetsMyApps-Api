import { blob, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { createInsertSchema, createUpdateSchema } from 'drizzle-zod'

export const appsSchema = sqliteTable('Apps', {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  githubRepoUrl: text('github_repo_url').notNull(),
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
      windows: string | null
      macos: string | null
      linux: string | null
      android: string | null
      ios: string | null
    }>()
    .default({
      windows: null,
      macos: null,
      linux: null,
      android: null,
      ios: null
    }),
  isFeatured: integer('is_featured', { mode: 'boolean' })
    .default(false)
    .notNull(),
  technologies: blob({ mode: 'json' }).$type<string[]>().notNull(),
  osIconsUrls: blob('os_icons_urls', { mode: 'json' })
    .$type<string[]>()
    .notNull()
})

export const insertAppSchema = createInsertSchema(appsSchema)
export const updateAppSchema = createUpdateSchema(appsSchema)
