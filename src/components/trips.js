'use strict';

import moment from 'moment';
import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Content, Thumbnail, Header, Left, Right, Body, Title, Subtitle, Button, Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import ActionButton from 'react-native-action-button';

// test
import PushNotification from 'react-native-push-notification';

import TripItem from './trip-item';

export default class extends React.Component {

    componentDidMount() {

        console.log('Trips did mount, props?', this.props);

        // if trip is current trip, go to first
        if (false) {
            this.props.navigation.navigate('TripDetail', { color: 'white' });
        }

        // TEST
        PushNotification.configure({

            // (optional) Called when Token is generated (iOS and Android)
            onRegister: function(token) {
                console.log( 'TOKEN:', token );
            },

            // (required) Called when a remote or local notification is opened or received
            onNotification: function(notification) {
                console.log( 'NOTIFICATION:', notification );
                // === click op 'create new log entry'? => create new!
            },

            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,

            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             */
            requestPermissions: false,
        });

        // TODO: dit na het aanmaken van profiel en/of het aanmaken van een nieuwe reis
        // PushNotification.requestPermissions();

        // TODO: set a local notification every day at the same time
        // OR: track location, when location === appartment AND time is *evening* trigger local notification
        // * When it's based on location, we can even send data like 'Je hebt 6km gelopen vandaag, zo zo! schrijf nu een logboek!' or something..
        // * 1 badge per day missed?
        PushNotification.localNotificationSchedule({
            message: "Hoe was je eerste vakantiedag? Maak nu je vakantielogboek aan!",
            date: new Date(Date.now() + (10 * 1000))
        });

    }

    render() {



        let items = [
            {
                id: 1,
                color: 'rgb(0, 179, 134)',
                title: 'Molyvos - Lesbos - Griekenland',
                location: {
                    coordinates: {latitude: 39.3677106, longitude: 26.1745993},
                    radius: 10000
                },
                startDate: moment('2016-04-03'),
                endDate: moment('2016-06-03'),
            },
            {
                id: 2,
                color: 'rgb(243,227,191)',
                title: 'Brussel - Belgie',
                location: {
                    coordinates: {latitude: 50.8486412, longitude: 4.3547457},
                    radius: 10000
                },
                startDate: moment('2015-04-03'),
                endDate: moment('2015-06-03'),
            },
            {
                id: 3,
                color: 'rgb(248,177,149)',
                title: 'Brussel - Belgie',
                location: {
                    coordinates: {latitude: 50.8486412, longitude: 4.3547457},
                    radius: 10000
                },
                startDate: moment('2015-04-03'),
                endDate: moment('2015-06-03'),
            },
            {
                id: 4,
                color: 'rgb(242,125,137)',
                title: 'Brussel - Belgie',
                location: {
                    coordinates: {latitude: 50.8486412, longitude: 4.3547457},
                    radius: 10000
                },
                startDate: moment('2015-04-03'),
                endDate: moment('2015-06-03'),
            },
            {
                id: 5,
                color: 'rgb(118,91,147)',
                title: 'Brussel - Belgie',
                location: {
                    coordinates: {latitude: 50.8486412, longitude: 4.3547457},
                    radius: 10000
                },
                startDate: moment('2015-04-03'),
                endDate: moment('2015-06-03'),
            },
            {
                id: 6,
                color: 'rgb(189,212,232)',
                title: 'Brussel - Belgie',
                location: {
                    coordinates: {latitude: 50.8486412, longitude: 4.3547457},
                    radius: 10000
                },
                startDate: moment('2015-04-03'),
                endDate: moment('2015-06-03'),
            }
        ];

        items = this.props.trips.store.map((trip) => {
            return Object.assign({}, trip);
        });
        // TODO: meer echt een tijdlijn van maken met jaar en maand sections



        let listItems = [];
        for (let item of items) {
            if (items.indexOf(item) === 0) {
                listItems.push(
                    <View key={'gradient-start'} style={{ height: 30 }}>
                        <LinearGradient
                            start={{x: 0.0, y: 0}} end={{x: 0, y: 1.0}}
                            locations={[0,1]}
                            colors={['white', 'rgb(0, 179, 134)']}
                            style={{ width: 4, marginLeft: 5, marginRight: 5, flex: 1 }} />
                    </View>
                );
            }
            listItems.push(
                <TripItem onPress={() => this.props.navigation.navigate('TripDetail', { color: 'rgb(0, 179, 134)' })}
                          key={item.id}
                          {...item} />
            );
            let secondColor = 'rgb(255,255,255)';
            if (items.indexOf(item) < items.length-1) {
                secondColor = 'rgb(0, 179, 134)';
            }
            listItems.push(
                <View key={'gradient-'+item.id} style={{ height: 40 }}>
                    <LinearGradient
                        start={{x: 0.0, y: 0}} end={{x: 0, y: 1.0}}
                        locations={[0,1]}
                        colors={['rgb(0, 179, 134)', secondColor]}
                        style={{ width: 4, marginLeft: 5, marginRight: 5, flex: 1 }} />
                </View>
            );
        }

        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Jouw reizen</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('TripMapView')}>
                            <Icon name="map" />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={{padding: 0, margin: 0}}>
                        <View style={{padding: 0, margin: 0, flexDirection: 'row'}}>
                            <View>
                                <View style={{ width: 4, marginLeft: 5, marginRight: 5, backgroundColor: '#000000', flex: 1}} />
                            </View>
                            <View>
                                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Spanje 2017</Text>
                                <Text style={{fontWeight: 'bold'}}>Geplande reis</Text>
                                <Text>{moment('2017-06-28').format('dddd, MMMM Do YYYY')} - {moment('2017-08-01').format('dddd, MMMM Do YYYY')}</Text>
                                <Text>Je krijgt een melding wanneer deze reis begint</Text>
                            </View>
                        </View>
                        {listItems}
                    </View>
                </Content>
                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#1abc9c'
                                       title="Nieuwe reis toevoegen"
                                       onPress={() => this.props.navigation.navigate('TripCreate')}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>
            </Container>
        );
    }

}

const styles = {
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
};