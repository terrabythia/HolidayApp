import React from 'react'
import realm from './../../realm';
import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './../reducers'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

const enhancer = compose(
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);

// // uncomment to delete everything from the storage
// realm.write(() => {
//     realm.deleteAll();
// });

const realmObjects = {
    trips: realm.objects('Trip')
};
let defaultState = {
    trips: {
        store: realmObjects.trips
    },
};

console.log('default state is', defaultState);

export default createStore(reducer, defaultState, enhancer);