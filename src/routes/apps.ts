// Handlers
import { handleIndexRoute } from '../handlers/apps'

// Third-Party libraries
import { Router } from 'express'

const router = Router()

router.get('/', handleIndexRoute)

export default router
