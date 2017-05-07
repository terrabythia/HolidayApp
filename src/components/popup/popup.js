'use strict';

import React from 'react';
import {Modal, View, Text, LayoutAnimation} from 'react-native';
import {Button} from 'native-base';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDateTimePickerVisible: false,
            startDate: null,
            endDate: null,
            location: {
                coordinates: null,
                radius: null
            },
            title: null
        };
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });


    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };

    render() {
        return (
            <Modal
                transparent={true}
                visible={this.props.visible}>

                <View style={{
                    flex: 1,
                    backgroundColor: 'rgba(0,0,0,0)',
                    justifyContent: 'center',
                    alignItems: 'center'}}>
                    <View style={{flexWrap: 'wrap', backgroundColor: 'white', padding: 20}}>
                        <View style={{flexDirection:'row'}}>
                            <Text>Vertrek</Text>
                            <Button onPress={this._showDateTimePicker}>
                                <Text>Kies</Text>
                            </Button>
                        </View>
                    </View>
                </View>

                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />

            </Modal>
        );
    }

}