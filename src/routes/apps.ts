// Handlers
import {
  handleCreateAppRoute,
  handleDeleteAppByIdRoute,
  handleGetAppByIdRoute,
  handleIndexRoute,
  handleUpdateAppRoute
} from '../handlers/apps'

// Third-Party libraries
import { Router } from 'express'

const router = Router()

router.get('/', handleIndexRoute)
router.get('/:id', handleGetAppByIdRoute)
router.post('/', handleCreateAppRoute)
router.put('/:id', handleUpdateAppRoute)
// eslint-disable-next-line drizzle/enforce-delete-with-where
router.delete('/:id', handleDeleteAppByIdRoute)

export default router
