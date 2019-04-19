var { NodeCodis } = require('node-codis')

module.exports = function (app) {
  const nodeCodis = new NodeCodis(app.config.codis)

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
}