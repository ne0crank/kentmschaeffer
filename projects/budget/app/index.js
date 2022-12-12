require('dotenv').config()
const path = require('path')
const cors = require('cors')
const express = require('express')
const morgan = require('morgan')
// const { establishDBConnection } = require('./database/connection')
// const { apiRoutes } = require('./routes/index')
const trunks = require('trunks-log')

// turn on logging for main nodejs app
const appLog = new trunks('NODE')
const morLog = process.env.MORGAN_LOG_TEMPLATE || 'tiny'

// app server settings
const appHost = process.env.APP_HOST || 'localhost'
const appPort = process.env.APP_PORT || 3000
const appUrl = 'http://' + appHost + ':' + appPort

// web/mgr server settings
const webHost = process.env.WEB_HOST || appHost
const webPort = process.env.WEB_PORT || 8080
const webUrl = 'http://' + webHost + ':' + webPort

// configure cors preflight conf options
const corsOptions = {
  origin: webUrl,
  methods: [ 'GET', 'PUT', 'POST', 'DELETE' ],
  allowedHeaders: [
    'X-requested-With',
    'Accept',
    'Origin',
    'Referer',
    'User-Agent'
    'Content-Type',
    'Authorization'
  ],
  maxAge: 10000
}

// turn on express
const app = express()

// turn on cors with options
app.use(cors(corsOptions))

// establish connection to mongodb
// establishDbConnection

// mount logging middleware
app.use(morgan(morLog))

// start parsing requests as json
app.use(express.json())

// register api routes
app.use('/api', apiRoutes)

// register web/mgr routes
app.use('/app', express.static(path.resolve(__dirname, '..dist')))

// finally, start up the app
app.listen(appPort, () => {
  appLog.info(`Budget App running on port ${appPort}`)
})
