require('dotenv').config({ path: `${__dirname}/../.env` })
import express from 'express'
import next from 'next'
import path from 'path'
import compression from 'compression'

// Middleware
import securityHeaders from './middleware/securityHeaders'

import isProduction from './utils/isProduction'

const port = parseInt(process.env.PORT) || 3000
const isDevelopment = !isProduction()

const app = next({ dev: isDevelopment })
const handle = app.getRequestHandler()

// Construct static file directory conditionally
const staticAssetPath = path.join(
  __dirname,
  `${isDevelopment ? '..' : '../..'}/public`,
)

app
  .prepare()
  .then(() => {
    const server = express()
    server.use(securityHeaders)
    server.use(compression())

    server.use(express.static(staticAssetPath))

    // API Routes
    server.all(/^\/api\/.+/, (req, res) => {
      return handle(req, res)
    })

    // You can add custom server routes here
    // e.g. checking if dynamic routing paths exist
    // Make sure to send 404 / correct response codes for web crawlers

    // Handle all other request by Next.js
    server.all('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, err => {
      if (err) throw err
      console.info(`> Server running on http://localhost:${port} 🦄`)
    })
  })
  .catch(console.error)
