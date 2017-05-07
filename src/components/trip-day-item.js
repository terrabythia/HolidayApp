'use strict';

import React from 'react';
import {Dimensions, View, Text, TouchableOpacity} from 'react-native';
import {Card, Thumbnail, Icon} from 'native-base';
import MapView from 'react-native-maps';

const SCREEN_DIMENSIONS = Dimensions.get('window');

export default class extends React.Component {

    render() {

        let mapView = <View style={{ height:SCREEN_DIMENSIONS.width/2, width: SCREEN_DIMENSIONS.width/2 }} />
        if (this.props.loadMap) {
            mapView = <MapView
                pointerEvents="none"
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                style={{ height:SCREEN_DIMENSIONS.width/2, width: SCREEN_DIMENSIONS.width/2 }} />;
        }

        return (
            <TouchableOpacity {...this.props}>
                <Card>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 8}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Dag 1: 3 juli 2016</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Icon style={{ fontSize: 20 }} name="rainy" />
                            <Text style={{ marginLeft: 10 }}>regen, 15 °C</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        {mapView}
                        <View>
                            <View style={{flexDirection: 'row'}}>
                                <Thumbnail square style={{width: SCREEN_DIMENSIONS.width/4, height: SCREEN_DIMENSIONS.width/4}} source={require('./../resources/img/lesbos-1.jpg')} />
                                <Thumbnail square style={{width: SCREEN_DIMENSIONS.width/4, height: SCREEN_DIMENSIONS.width/4}} source={require('./../resources/img/lesbos-2.jpg')} />
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Thumbnail square style={{width: SCREEN_DIMENSIONS.width/4, height: SCREEN_DIMENSIONS.width/4}} source={require('./../resources/img/lesbos-3.jpg')} />
                                <Thumbnail square style={{width: SCREEN_DIMENSIONS.width/4, height: SCREEN_DIMENSIONS.width/4}} source={require('./../resources/img/lesbos-4.jpg')} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', padding: 4 }}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                            <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="walk" />
                            <Text>11 km</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                            <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="videocam" />
                            <Text>1 video</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                            <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="images" />
                            <Text>10 foto's</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                            <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="book" />
                            <Text>1 verslag</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                            <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="navigate" />
                            <Text>Petra</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                            <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="navigate" />
                            <Text>Eftalou</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                            <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="thumbs-up" />
                            <Text>20 likes</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                            <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="chatbubbles" />
                            <Text>2 reacties</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                            <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="pricetag" />
                            <Text>Mitrailette</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                                <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="pricetag" />
                            <Text>Zee</Text>
                        </View>
                    </View>
                </Card>
            </TouchableOpacity>
        );
    }

}