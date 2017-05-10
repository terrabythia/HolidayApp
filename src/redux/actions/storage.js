import * as types from './../store/types';

export const storeTrip = (trip) => {
    return {
        type: types.STORAGE_STORE_TRIP,
        trip
    }
};

export const destroyTrip = (id) => {
    return {
        type: types.STORAGE_DESTROY_TRIP,
        id
    }
};

