// Routes
import appsRouter from './routes/apps'

// Constants
import { DEFAULT_PORT, PORT } from './constants/env'

// Third-Party libraries
import express from 'express'

const app = express()

app.use('/api', appsRouter)

app.listen(PORT ?? DEFAULT_PORT, () => {
  console.log(
    `📡 API available at http://localhost:${PORT ?? DEFAULT_PORT}/api`
  )
})
