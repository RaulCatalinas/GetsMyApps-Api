// Constants
import { API_KEY } from '../constants/env'

// THird-Party libraries
import type { NextFunction, Request, Response } from 'express'

export function requireAuth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.replace('Bearer: ', '')

  if (token === undefined) {
    return res.status(401).json({ error: 'Missing authorization header' })
  }

  if (token !== API_KEY) {
    return res.status(401).json({ error: 'Invalid API key' })
  }
  next()
}
