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
  persistStore, 
  persistReducer
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {
  Provider
} from 'react-redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
 };

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, applyMiddleware(thunk, logger));
const persistor = persistStore(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={persistor}>
        <Navigation />
      </Provider>
    );
  }
}
