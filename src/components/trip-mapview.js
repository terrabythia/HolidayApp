'use strict';

import React from 'react';
import {View} from 'react-native';
import {Container, Button, Icon} from 'native-base';
import MapView from 'react-native-maps';


export default class extends React.Component {

    render() {
        return (
            <View style={{flex: 1}}>

                <MapView
                    style={{flex: 1}}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />

                <Button
                    transparent
                    onPress={() => this.props.navigation.goBack()}
                    style={{ position: 'absolute', top: 10, left: 10 }}>
                    <Icon name="arrow-back" />
                </Button>

            </View>
        );
    }

}