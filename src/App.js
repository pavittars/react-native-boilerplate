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
  Provider
} from 'react-redux';
import createStore from './reducers';
import { PersistGate } from 'redux-persist/integration/react'

let { store, persistor } = createStore();

import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
console.disableYellowBox = true; 

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    );
  }
}
