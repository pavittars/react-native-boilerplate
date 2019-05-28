/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Navigation from './config/navigation';
import {
  createStore,
  applyMiddleware
} from 'redux';
import {
  Provider
} from 'react-redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import rootReducer from './reducers';
const store = createStore(rootReducer,
  applyMiddleware(thunk, logger));

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
