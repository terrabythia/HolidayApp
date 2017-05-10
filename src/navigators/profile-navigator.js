'use strict';

import { StackNavigator } from 'react-navigation'
import ProfileContainer from './../containers/profile';

export default StackNavigator({
    Profile: {
        screen: ProfileContainer
    }
}, {
    headerMode: 'none'
});