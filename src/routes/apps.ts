// Handlers
import {
  handleGetAppByIdRoute,
  handleIndexRoute,
  handleUpdateAppRoute
} from '../handlers/apps'

// Third-Party libraries
import { Router } from 'express'

const router = Router()

router.get('/', handleIndexRoute)
router.get('/:id', handleGetAppByIdRoute)
router.put('/:id', handleUpdateAppRoute)

export default router
