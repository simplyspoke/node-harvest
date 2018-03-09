import { AxiosRequestConfig } from 'axios';
import { assign, cloneDeep } from 'lodash';

import * as helpers from './helpers';

export default class Authentication {
  // method: string
  accessToken: string;
  accountId: string;
  private queue;
  private request;
  private concurrency;
  private timeout;

  constructor(config: any) {
    this.accessToken = config.accessToken;
    this.accountId = config.accountId;
    // this.method = config.method

    // TODO: Extend to cover oauth2
  }

  getConfig(requestConfig: AxiosRequestConfig) {
    const config: AxiosRequestConfig = cloneDeep(requestConfig);

    config.headers.Authorization = this.accessToken;
    config.headers['Harvest-Account-Id'] = this.accountId;

    return config;
  }

  // setAccessToken(options, cb) {
  //   return new Promise((resolve, reject) => {
  //     this.request
  //       .post('/oauth2/token', {
  //         data: options
  //       })
  //       .then(response => {
  //         if (!response.access_token) {
  //           return reject('Provided access code was rejected by Harvest, no token was returned')
  //         }
  //
  //         this.request.defaults.headers.Authorization = `Bearer response.access_token`
  //         resolve('Access token set')
  //       })
  //       .catch(error => {
  //         reject(error)
  //       })
  //   })
  // }
}
