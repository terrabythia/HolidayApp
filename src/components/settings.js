'use strict';

import React from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';

export default class extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Instellingen',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="settings" style={{color: tintColor}} />
        ),
    };

    render() {
        return (<View>

        </View>);
    }

}