#!/usr/bin/env ts-node
import {app as api} from '../api'
import http from 'node:http'
import {config} from '../lib/config'
import {log} from '../lib/logger'
import {AddressInfo} from 'net'


export const app = api
const port = config.api.port || 3000
app.set('port', port)

export const server = http.createServer(app)

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port)
server.on('error', onError)
server.on('listening', onListening)


/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = `Port ${port}`
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      log.fatal(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      log.fatal(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address()
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${(addr as AddressInfo).port}`
  log.debug(`Listening on ${bind}`)
}
