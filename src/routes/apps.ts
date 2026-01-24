// Handlers
import {
  handleCreateAppRoute,
  handleDeleteAppByIdRoute,
  handleGetAppByIdRoute,
  handleIndexRoute,
  handleUpdateAppRoute
} from '../handlers/apps'

// Middlewares
import { requireAuth } from '../middlewares/auth'

// Third-Party libraries
import { Router } from 'express'

const router = Router()

router.get('/', handleIndexRoute)
router.get('/:id', handleGetAppByIdRoute)

// Protected routes
router.post('/', requireAuth, handleCreateAppRoute)
router.put('/:id', requireAuth, handleUpdateAppRoute)
router.delete('/:id', requireAuth, handleDeleteAppByIdRoute)

export default router
