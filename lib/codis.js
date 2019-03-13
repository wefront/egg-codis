var { NodeCodis } = require('node-codis')

module.exports = function (app) {
  const nodeCodis = new NodeCodis(app.config.codis)

  const ready = () => {
    return new Promise(resolve => {
      nodeCodis.on('connected', resolve)
    })
  }

  app.$nodeCodis = nodeCodis

  app.beforeStart(async () => {
    await ready()
  })
}