'use strict';

import React from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';

export default class extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Profiel',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{color: tintColor}} />
        ),
    };

    render() {
        return (<View>

        </View>);
    }

}