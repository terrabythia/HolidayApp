'use strict';

import { StackNavigator } from 'react-navigation'
import TripsContainer from './../containers/trips';
import TripDetailContainer from './../containers/trip-detail';
import TripDayDetailContainer from './../containers/trip-day-detail';
import TripMapViewContainer from './../containers/trip-mapview';
import TripCreateContainer from './../containers/trip-create';
import TripCreateMapViewContainer from './../containers/trip-create-mapview';

export default StackNavigator({
    Trips: {
        screen: TripsContainer
    },
    TripDetail: {
        screen: TripDetailContainer
    },
    TripDayDetail: {
        screen: TripDayDetailContainer
    },
    TripMapView: {
        screen: TripMapViewContainer
    },
    TripCreate: {
        screen: TripCreateContainer
    },
    TripCreateMapView: {
        screen: TripCreateMapViewContainer
    }
}, {
    headerMode: 'none'
});