/*
 * @file: Connection.js
 * @description: Connection file for the application
 * @date: 04.07.2018
 * @author: Pavittar Singh
 * */

import { getEnv } from './app-config';

const httpUrl = getEnv(process.env.REACT_ENV);

class Connection {
  static getResturl(url) {

    return `${httpUrl}/${url}`;
  }
}

export default Connection;
