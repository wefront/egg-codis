const { NodeCodis } = require('node-codis')

module.exports = {
  get codis () {
    const config = this.config.codis
    // 不启用负载均衡
    if (!config.loadBalancing) {
      return this.$nodeCodis.redisClient
    } else {
      return NodeCodis.getRandomClient(this.$nodeCodis.codisClientPool)
    }
  }
}