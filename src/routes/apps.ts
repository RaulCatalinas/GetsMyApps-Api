// Handlers
import { handleGetAppByIdRoute, handleIndexRoute } from '../handlers/apps'

// Third-Party libraries
import { Router } from 'express'

const router = Router()

router.get('/', handleIndexRoute)
router.get('/:id', handleGetAppByIdRoute)

export default router
