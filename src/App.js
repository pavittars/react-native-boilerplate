/*
 * @file: App.js
 * @description: App.js to render the app
 * @date: 29.05.2019
 * @author: Pavittar Singh
 * */

import React, { Component } from 'react';
import Navigation from './config/navigation';
import {
  Provider
} from 'react-redux';
import createStore from './reducers';
import { PersistGate } from 'redux-persist/integration/react';
import FlashMessage from "react-native-flash-message";


let { store, persistor } = createStore();

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings(['Warning: ReactNative.createElement']);
// eslint-disable-next-line no-console 
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation store={store} />
          <FlashMessage position="top" />
        </PersistGate>
      </Provider>
    );
  }
}
