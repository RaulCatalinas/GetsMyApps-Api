// DB
import { eq } from 'drizzle-orm'
import { db } from '../db/client'
import { appsSchema } from '../db/schema'

// Third-Party libraries
import type { Request, Response } from 'express'

export async function handleIndexRoute(_: Request, res: Response) {
  const apps = await db.select().from(appsSchema).all()

  return res.json(apps)
}

export async function handleGetAppByIdRoute(req: Request, res: Response) {
  const id = Number(req.params.id)

  if (Number.isNaN(id)) {
    return res.status(400).json({ error: 'Invalid ID' })
  }

  const app = await db.select().from(appsSchema).where(eq(appsSchema.id, id))

  if (app.length === 0) {
    return res.status(404).json({ error: 'App not found' })
  }

  return res.json(app[0])
}
