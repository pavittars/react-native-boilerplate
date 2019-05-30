/*
 * @file: Connection.js
 * @description: Connection file for the application
 * @date: 04.07.2018
 * @author: Jasdeep Singh
 * */

import { environment as PATH } from './app-config';

const httpUrl = PATH.API_URL;

class Connection {
  static getResturl(url) {
    return `${httpUrl}/${url}`;
  }
}

export default Connection;
