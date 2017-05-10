'use strict';

import Requests from './requests';

export default class GoogleRequests extends Requests {

    async fetchPlaces(query) {
        return this.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
            query,
            key: 'AIzaSyDDyn4fPqR3Xni8IBA9vy7sSBN2IuByxr0'
        });
    }

}