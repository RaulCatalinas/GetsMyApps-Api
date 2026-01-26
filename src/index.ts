// Routes
import appsRouter from './routes/apps'

// Constants
import { ALLOWED_ORIGINS } from './constants/cors'
import { DEFAULT_PORT, PORT } from './constants/env'

// Third-Party libraries
import cors from 'cors'
import express from 'express'

const app = express()

app.use(
  cors({
    origin: (origin, callback) => {
      if (origin === undefined || ALLOWED_ORIGINS.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  })
)
app.use(express.json())
app.use(appsRouter)

app.listen(PORT ?? DEFAULT_PORT, () => {
  console.log(`📡 API available at http://localhost:${PORT ?? DEFAULT_PORT}`)
})
