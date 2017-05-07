'use strict';

import React from 'react';
import {Modal, View, Text, TextInput, LayoutAnimation} from 'react-native';
import {Container, Content, Header, Left, Right, Body, Title, Button, Icon} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            pickingStartDate: false,
            pickingEndDate: false,
            startDate: null,
            endDate: null,
            location: {
                coordinates: null,
                radius: null
            },

        };
    }

    _hideDateTimePicker = () => {
        this.setState({ pickingStartDate: false, pickingEndDate: false });
    };


    _handleDatePicked = (date) => {
        if (this.state.pickingStartDate) {
            this.setState({
                startDate: date
            });
        }
        else if (this.state.pickingEndDate) {
            this.setState({
                endDate: date
            });
        }
        LayoutAnimation.easeInEaseOut();
        this._hideDateTimePicker();
    };


    render() {

        // TODO: are you sure you want to go back?
        // Your new journey will not be saved..

        let steps = [];

        steps.push(
            <View key="step-title">
                <Text>Geef je reis een titel</Text>
                <TextInput
                    style={{ borderColor: 'gray', borderWidth: 1, height: 40}}
                    onChangeText={(title) => this.setState({title})}
                    value={this.state.title}
                />
            </View>
        );

        if (this.state.title) {
            steps.push(
                <View key="step-start-date" style={{flexDirection:'row'}}>
                    <Text>Vertrek</Text>
                    <Button onPress={() => this.setState({ pickingStartDate: true })}>
                        <Text>Kies</Text>
                    </Button>
                </View>
            );
        }

        if (this.state.startDate) {
            steps.push(
                <View key="step-end-date" style={{flexDirection:'row'}}>
                    <Text>Terugkomst</Text>
                    <Button onPress={() => this.setState({ pickingEndDate: true })}>
                        <Text>Kies</Text>
                    </Button>
                </View>
            );
        }

        if (this.state.endDate) {
            steps.push(
                <View key="step-destination" style={{flexDirection:'row'}}>
                    <Text>Bestemming</Text>
                    <Button onPress={() => this.props.navigation.navigate('TripCreateMapView')}>
                        <Text>Kies</Text>
                    </Button>
                </View>
            );
        }

        let minDate = new Date();

        if (this.state.location.coordinates) {
            steps.push(
                <Button>
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