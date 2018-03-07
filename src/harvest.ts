/**
 * Provides the starting point of the harvest module
 */
export default class Harvest {
  host
  userAgent = null
  concurrency = null
  debug = false

  constructor(config) {
    this.host = 'https://' + config.subdomain + '.harvestapp.com'
    this.userAgent = config.userAgent
    this.concurrency = config.concurrency || null
    this.debug = config.debug || false
  }
}
