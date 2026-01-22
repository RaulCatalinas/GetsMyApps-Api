interface ImportMetaEnv {
  readonly TURSO_DATABASE_URL: string
  readonly TURSO_AUTH_TOKEN: string
  readonly PORT?: number
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
