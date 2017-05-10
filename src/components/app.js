'use strict';

import { TabNavigator } from 'react-navigation';

import TripNavigator from './../navigators/trip-navigator';
import FriendsNavigator from './../navigators/friends-navigator';
import ProfileNavigator from './../navigators/profile-navigator';
import SettingsNavigator from './../navigators/settings-navigator';

export default TabNavigator({
    Trips: {
        screen: TripNavigator
    },
    Friends: {
        screen: FriendsNavigator
    },
    Profile: {
        screen: ProfileNavigator
    },
    Settings: {
        screen: SettingsNavigator
    }
});