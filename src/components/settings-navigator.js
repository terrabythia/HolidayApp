'use strict';

import { StackNavigator } from 'react-navigation'
import Settings from './settings';

export default StackNavigator({
    Settings: {
        screen: Settings
    }
}, {
    headerMode: 'none'
});