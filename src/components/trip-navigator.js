'use strict';

import { StackNavigator } from 'react-navigation'
import Trips from './trips';
import TripDetail from './trip-detail';
import TripDayDetail from './trip-day-detail';
import TripMapView from './trip-mapview';
import TripCreate from './trip-create';
import TripCreateMapView from './trip-create-mapview';

export default StackNavigator({
    Trips: {
        screen: Trips
    },
    TripDetail: {
        screen: TripDetail
    },
    TripDayDetail: {
        screen: TripDayDetail
    },
    TripMapView: {
        screen: TripMapView
    },
    TripCreate: {
        screen: TripCreate
    },
    TripCreateMapView: {
        screen: TripCreateMapView
    }
}, {
    headerMode: 'none'
});