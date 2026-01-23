// DB
import { eq } from 'drizzle-orm'
import { db } from '../db/client'
import { appsSchema } from '../db/schema'

// Third-Party libraries
import type { Request, Response } from 'express'

export async function handleIndexRoute(_: Request, res: Response) {
  try {
    const apps = await db.select().from(appsSchema)

    return res.json(apps)
  } catch (error) {
    console.error('Error fetching apps: ', error)

    return res.status(500).json({ error: 'Internal server error' })
  }
}

export async function handleGetAppByIdRoute(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)

    if (Number.isNaN(id)) {
      return res.status(400).json({ error: 'Invalid ID' })
    }

    const app = await db.select().from(appsSchema).where(eq(appsSchema.id, id))

    if (app.length === 0) {
      return res.status(404).json({ error: 'App not found' })
    }

    return res.json(app[0])
  } catch (error) {
    console.error('Error fetching app by ID: ', error)

    return res.status(500).json({ error: 'Internal server error' })
  }
}
