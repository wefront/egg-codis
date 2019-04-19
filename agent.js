var codis = require('./lib/codis')

module.exports = agent => {
  if (agent.config.codis.agent) codis(agent)
}