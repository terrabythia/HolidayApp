'use strict';

import moment from 'moment';
import React from 'react';
import {Dimensions, Modal, View, Text, TextInput, LayoutAnimation, TouchableOpacity} from 'react-native';
import {Container, Content, Header, Left, Right, Body, Title, Button, Icon, Form, Item, Input,Label} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {storeTrip} from './../redux/actions/trips';

const SCREEN_DIMENSIONS = Dimensions.get('window');

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            trip: {
                title: null,
                pickingStartDate: false,
                pickingEndDate: false,
                startDate: null,
                endDate: null,
                location: {
                    latitude: null,
                    longitude: null,
                    radius: null
                },
            },
            pickingStartDate: false,
            pickingEndDate: false,
        };
    }

    _hideDateTimePicker = () => {
        this.setState({ pickingStartDate: false, pickingEndDate: false });
    };


    _handleDatePicked = (date) => {
        if (this.state.pickingStartDate) {
            this.setState({
                trip: Object.assign(this.state.trip, {
                    startDate: date
                })
            });
        }
        else if (this.state.pickingEndDate) {
            this.setState({
                trip: Object.assign(this.state.trip, {
                    endDate: date
                })
            });
        }
        this._hideDateTimePicker();
    };

    _didSelectLocation = (location) => {
        this.setState({
            trip: Object.assign(this.state.trip, {
                location: location
            })
        });
    };

    _createTrip = async () => {
        // create and go back!
        try {
            await this.props.dispatch(storeTrip(this.state.trip));
            this.props.navigation.goBack();
        }
        catch(e) {
            console.log('error storing trip!', e);
        }
    };

    componentWillUpdate() {
        LayoutAnimation.easeInEaseOut()
    }

    render() {

        // TODO: are you sure you want to go back?
        // Your new journey will not be saved..

        let steps = [];

        steps.push(
            <Form key="step-title">
                <Item floatingLabel>
                    <Label>Geef je reis een titel</Label>
                    <Input onChangeText={(title) => this.setState({trip: Object.assign(this.state.trip, {title: title})})} value={this.state.title} />
                </Item>
            </Form>
        );

        const trip = this.state.trip;

        if (trip.title) {
            let startDateView = null;
            if (trip.startDate) {
                startDateView = (<Text>{moment(trip.startDate).format('dddd, MMMM Do YYYY')}</Text>)
            }
            steps.push(
                <View key="step-start-date" style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
                    {startDateView}
                    <Right>
                        <Button light onPress={() => this.setState({ pickingStartDate: true })}>
                            <Text>{trip.startDate?'Aanpassen':'Kies een vertekdatum'}</Text>
                        </Button>
                    </Right>

                </View>
            );
        }

        if (trip.title && trip.startDate) {
            let endDateView = null;
            if (trip.endDate) {
                endDateView = (<Text>{moment(trip.endDate).format('dddd, MMMM Do YYYY')}</Text>)
            }
            steps.push(
                <View key="step-end-date" style={{flexDirection: 'row', padding: 10, alignItems: 'center'}}>
                    {endDateView}
                    <Right>
                        <Button light onPress={() => this.setState({ pickingEndDate: true })}>
                            <Text>{trip.endDate?'Aanpassen':'Kies een terugkomstdatum'}</Text>
                        </Button>
                    </Right>

                </View>
            );
        }

        if (trip.title && trip.startDate && trip.endDate) {
            let locationView = null;
            if (trip.location.title) {
                locationView = (<Text>{trip.location.title}</Text>)
            }
            steps.push(
                <View key="step-destination" style={{flexDirection: 'row', padding: 10}}>
                    {locationView}
                    <Right>
                        <Button light onPress={() => this.props.navigation.navigate('TripCreateMapView', { didSelectLocation: this._didSelectLocation })}>
                            <Text>{trip.location.title?'Aanpassen':'Kies een bestemming'}</Text>
                        </Button>
                    </Right>

                </View>
            );
        }

        let minDate = new Date();

        if (trip.title && trip.startDate && trip.endDate && trip.location.latitude && trip.location.longitude) {
            steps.push(
                <Button key="step-submit"
                        onPress={this._createTrip}
                        block light>
                    <Text>Aanmaken</Text>
                </Button>
            );
        }

        return (
            <Container>

                <Header>
                    <Left style={{flex: 0}}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Plan nieuwe reis</Title>
                    </Body>
                    <Right />
                </Header>

                <Content>
                    {steps}
                </Content>

                <DateTimePicker
                    isVisible={this.state.pickingStartDate||this.state.pickingEndDate}
                    minimumDate={minDate}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
            </Container>
        );
    }

}