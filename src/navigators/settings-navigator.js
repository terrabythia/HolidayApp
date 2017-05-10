'use strict';

import { StackNavigator } from 'react-navigation'
import SettingsContainer from './../containers/settings';

export default StackNavigator({
    Settings: {
        screen: SettingsContainer
    }
}, {
    headerMode: 'none'
});