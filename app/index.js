import '@babel/polyfill';
import app from './app';

const port = process.env.PORT || 3000

process.on('unhandledRejection', error => {
  console.error(error)
  process.exit(1)
})

process.on('uncaughtException', error => {
  console.error(error)
  process.exit(1)
})

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

const httpServer = app.listen(port)
console.log(`App listening on port ${port}`)

function shutdown() {
  httpServer.close()
  console.log('\nApp shutdown')
  process.exit(0)
}