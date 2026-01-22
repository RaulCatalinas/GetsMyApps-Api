// DB
import { db } from '../db/client'
import { appsSchema } from '../db/schema'

// Third-Party libraries
import type { Request, Response } from 'express'

export async function handleIndexRoute(_: Request, res: Response) {
  const apps = await db.select().from(appsSchema).all()

  res.json(apps)
}
