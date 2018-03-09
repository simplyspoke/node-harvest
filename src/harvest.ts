import Client from './client';

/**
 * Provides the starting point of the harvest module
 */
export default class Harvest {
  host: string;
  userAgent = null;
  concurrency = null;
  debug = false;
  private client: Client;

  constructor(config) {
    this.host = 'https://' + config.subdomain + '.harvestapp.com';
    this.userAgent = config.userAgent;
    this.concurrency = config.concurrency || null;
    this.debug = config.debug || false;

    this.client = new Client(config);
  }

  request(method: string, uri: string, data: any, callback: Function) {
    if (this.debug) {
      console.log(method, uri, data, callback);
    }

    return new Promise((resolve, reject) => {
      this.client.push({
        method,
        uri,
        data,
        callback: (error, results) => {
          if (error) {
            reject(error);
          }

          resolve(results);
        }
      });
    });
  }
}
