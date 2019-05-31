/*
 * @file: reducer/index.js
 * @description: Create redux store with redux persistor for the application.
 * @date: 29.05.2019
 * @author: Pavittar Singh
 * */

import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";

import { userstatus, username, userphonenumber } from './signup';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
    userstatus,
    username,
    userphonenumber
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
    let persistor = persistStore(store)
    return { store, persistor };
}