'use strict';

import { StackNavigator } from 'react-navigation'
import FriendsContainer from './../containers/friends';

export default StackNavigator({
    Friends: {
        screen: FriendsContainer
    }
}, {
    headerMode: 'none'
});