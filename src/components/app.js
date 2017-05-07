'use strict';

import { TabNavigator } from 'react-navigation';

import TripNavigator from './trip-navigator';
import FriendsNavigator from './friends-navigator';
import ProfileNavigator from './profile-navigator';
import SettingsNavigator from './settings-navigator';

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