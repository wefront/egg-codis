var { NodeCodis } = require('node-codis')

module.exports = function (app) {
  const options = app.config.codis
  options.log = createLogger(app)
  const nodeCodis = new NodeCodis(options)

  const ready = () => {
    return new Promise((resolve) => {
      nodeCodis.on('connected', (err) => {
        if (err) {
          console.log(err)
          return
        }
        resolve()
      })
    })
  }

  app.$nodeCodis = nodeCodis

  app.beforeStart(async () => {
    await ready()
  })

  function createLogger(app) {
    return function (...args) {
      if (app.coreLogger.info) {
        app.coreLogger.info('[egg-codis]', ...args)
      } else {
        console.log('[egg-codis]', ...args)
      }
    }
  }
}