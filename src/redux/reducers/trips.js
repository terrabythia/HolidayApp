'use strict';

import * as types from './../store/types';

// for testing purposes we create a fake id on trip item creation:
const trip = (state, action) => {
    switch (action.type) {
        case types.ADD_TRIP:
            return action.trip;
        default:
            return state;
    }
};

const trips = (state = [], action) => {
    switch(action.type) {
        case types.ADD_TRIP:
            return [
                ...state,
                trip(undefined, action)
            ];
        case types.REMOVE_TRIP:
            return state.filter((trip) => trip.id !== trip.id);
        default:
            return state;
    }
};

// the above functions are just for reference, because
// realm takes care of every mutation for us..
export default (state = [], action) => {
    return Object.assign({}, {store: state.store});
    return action.state ? action.state : state;
};