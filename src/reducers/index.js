import { combineReducers } from 'redux';
import { userstatus } from './signup';
import { counter } from './counter';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import {
    createStore,
    applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const rootReducer = combineReducers({
    userstatus,
    counter
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk, logger))
    let persistor = persistStore(store)
    return { store, persistor };
}