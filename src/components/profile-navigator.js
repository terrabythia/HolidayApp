'use strict';

import { StackNavigator } from 'react-navigation'
import Profile from './profile';

export default StackNavigator({
    Profile: {
        screen: Profile
    }
}, {
    headerMode: 'none'
});