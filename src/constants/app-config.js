/*
 * @file: app-config.js
 * @description: It Contain app configration keys and environment path's.
 * @date: 30.05.2019
 * @author: Pavittar Singh
 */

export const environment = {
  API_URLS: {
    stag: 'https://meanstack.stagingsdei.com:4561',
    local: 'http://172.24.5.139:3000'
  }
};

export const getEnv = (env = 'stag') => environment.API_URLS[env];