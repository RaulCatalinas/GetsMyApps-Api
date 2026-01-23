// DB
import { eq } from 'drizzle-orm'
import { db } from '../db/client'
import { appsSchema, updateAppSchema } from '../db/schema'

// Third-Party libraries
import type { Request, Response } from 'express'

export async function handleIndexRoute(_: Request, res: Response) {
  try {
    const apps = await db.select().from(appsSchema)

    return res.json(apps)
  } catch (error) {
    console.error('Error fetching apps: ', error)

    return res.status(500).json({ error: 'Failed to fetch apps' })
  }
}

export async function handleGetAppByIdRoute(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)

    if (Number.isNaN(id)) {
      return res.status(400).json({ error: 'ID must be a valid number' })
    }

    const app = await db.select().from(appsSchema).where(eq(appsSchema.id, id))

    if (app.length === 0) {
      return res.status(404).json({ error: 'App not found' })
    }

    return res.json(app[0])
  } catch (error) {
    console.error('Error fetching app by ID: ', error)

    return res.send(500).json({ error: 'Failed to fetch app' })
  }
}

export async function handleUpdateAppRoute(req: Request, res: Response) {
  try {
    const id = Number(req.params.id)

    if (Number.isNaN(id)) {
      return res.status(400).json({ error: 'ID must be a valid number' })
    }

    const appData = updateAppSchema.safeParse(req.body)

    if (!appData.success) {
      console.error('Error updating app: ', appData.error)

      return res.status(400).json({
        error: 'Invalid app data',
        details: appData.error.message
      })
    }

    const app = await db
      .update(appsSchema)
      .set(appData.data)
      .where(eq(appsSchema.id, id))

    if (app.rowsAffected === 0) {
      return res.status(404).json({ error: 'App not found' })
    }

    return res.status(200).json({ message: 'App updated successfully' })
  } catch (error) {
    console.error('Error creating app: ', error)

    return res.status(500).json({ error: 'Failed to update app' })
  }
}
