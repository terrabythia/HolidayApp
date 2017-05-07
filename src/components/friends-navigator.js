'use strict';

import { StackNavigator } from 'react-navigation'
import Friends from './friends';

export default StackNavigator({
    Friends: {
        screen: Friends
    }
}, {
    headerMode: 'none'
});