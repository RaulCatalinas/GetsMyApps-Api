import type { Request, Response } from 'express'

export function handleIndexRoute(req: Request, res: Response) {
  return res.json({ index: 'Hello World' })
}
