import * as types from './../store/types';
import realm from './../../realm';

// private
const addTrip = (trip) => {
    return {
        type: types.ADD_TRIP,
        trip
    }
};

const removeTrip = (id) => {
    return {
        type: types.REMOVE_TRIP,
        id
    }
};

const updateTrips = () => {
    return {
        type: types.UPDATE_TRIPS
    }
};

// public
export const storeTrip = (trip) => {
    return async (dispatch) => {
        // create id first
        // TODO: better id-system?
        trip = Object.assign({}, trip, {
            id: (new Date()).valueOf()
        });
        realm.write(() => {
            realm.create('Trip', trip);
        });
        // TODO: also add the server-syncing task to the queue
        // make sure the views are updated by redux
        dispatch(updateTrips());
    };
};

export const destroyTrip = (trip) => {

};



