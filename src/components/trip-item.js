'use strict';

import React from 'react';

import moment from 'moment';

import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import {Thumbnail, Icon} from 'native-base';

export default class extends React.Component {

    render() {

        const startDate = moment(this.props.startDate),
              endDate = moment(this.props.endDate);

        let currentTripView = null;
        if (moment().diff(startDate, 'days') >= 0 && moment().diff(endDate, 'days') <= 0) {
            currentTripView = <Text style={{fontWeight: 'bold'}}>Huidige reis</Text>;
        }

        return (
            <TouchableOpacity {...this.props}>
                <View style={{padding: 0, margin: 0, flexDirection: 'row'}}>
                    <View>
                        <View style={{ width: 4, marginLeft: 5, marginRight: 5, backgroundColor: 'rgb(118,91,147)', flex: 1}} />
                    </View>
                    <View>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{this.props.title}</Text>
                        {currentTripView}
                        <Text>{moment(this.props.startDate).format('dddd, MMMM Do YYYY')} - {moment(this.props.endDate).format('dddd, MMMM Do YYYY')}</Text>

                        <ScrollView
                            horizontal={true}>
                            <View style={{width: 120 * 4, flexDirection: 'row', height: 120}}>
                                <Thumbnail square style={{width: 100, height: 100}} source={require('./../resources/img/lesbos-1.jpg')} />
                                <Thumbnail square style={{width: 100, height: 100}} source={require('./../resources/img/lesbos-2.jpg')} />
                                <Thumbnail square style={{width: 100, height: 100}} source={require('./../resources/img/lesbos-3.jpg')} />
                                <Thumbnail square style={{width: 100, height: 100}} source={require('./../resources/img/lesbos-4.jpg')} />
                            </View>
                        </ScrollView>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', padding: 4 }}>
                            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                                <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="pricetag" />
                                <Text>25 foto's</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                                <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="pricetag" />
                                <Text>3 verslagen</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                                <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="pricetag" />
                                <Text>25 video's</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                                <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="pricetag" />
                                <Text>2 likes</Text>
                            </View>
                            <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: '#f3f3f3', padding: 3, borderRadius: 3, margin: 5}}>
                                <Icon style={{fontSize: 18, marginRight: 4, marginLeft: 4}} name="pricetag" />
                                <Text>22 reacties</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}