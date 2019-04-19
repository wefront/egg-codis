var codis = require('./lib/codis')

module.exports = app => {
  if (app.config.codis.app) codis(app)
}
