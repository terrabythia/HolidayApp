'use strict';

import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Container, Header, Title, Right, Left, Body, Content, Button, Icon, Item, Input, List, ListItem} from 'native-base';
import MapView from 'react-native-maps';

import {debounce} from './../helpers/helper-functions';
import GoogleRequests from './../classes/google.requests';

const googleRequests = new GoogleRequests();
export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedPlace: null,
            places: []
        };
    }

    _debouncedTextDidChange = debounce(async (query, context) => {
        try {
            let places = await googleRequests.fetchPlaces(query);
            context.setState({places: places.results});
        }
        catch(e) {
            console.log('places error!', e);
        }
    }, 300);

    _textDidChange = async (query) => {
        this._debouncedTextDidChange(query, this);
    };

    _pickPlace = (selectedPlace) => {

        this.props.navigation.state.params.didSelectLocation({
            title: selectedPlace.name,
            google_place_id: 'ChIJL8Irxcjmx0cRoxqJZQ58yLg',
            latitude: selectedPlace.geometry.location.lat,
            longitude: selectedPlace.geometry.location.lng,
        });
        this.props.navigation.goBack();

        // this.setState({selectedPlace});
    };

    render() {

        let listItems = [];
        if (this.state.places.length === 0) {
            listItems.push(
                <ListItem key="no-results">
                    <Text>Geen resultaten</Text>
                </ListItem>
            );
        }
        else {
            for (let place of this.state.places) {
                listItems.push(
                    <ListItem key={place.id} onPress={() => this._pickPlace(place)}>
                        <Text>{place.formatted_address}</Text>
                    </ListItem>
                );
            }
        }

        let mapViewContainer = null;
        if (this.state.x) {
            mapViewContainer = (<View style={{flex: 1}}>
                <MapView
                    style={{flex: 1}}
                    region={{
                        latitude: this.state.x.latitude,
                        longitude: this.state.x.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}>
                    <MapView.Marker draggable
                                    coordinate={this.state.x}
                                    onDragEnd={(e) => this.setState({ x: e.nativeEvent.coordinate })}
                    />
                </MapView>

                <Button block disabled={!this.state.selectedPlace}>
                    <Text>Selecteer</Text>
                </Button>
            </View>);
        }

        return (
            <Container style={{flex: 1}}>

                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Kies bestemming</Title>
                    </Body>
                    <Right/>
                </Header>

                <View style={{flex: 1}}>

                    <View style={{flex: 1}}>
                        <Item>
                            <Input placeholder="Zoek locatie"
                                   onChangeText={this._textDidChange} />
                        </Item>
                        <ScrollView>
                            <List>
                                {listItems}
                            </List>
                        </ScrollView>
                    </View>

                </View>

                {mapViewContainer}

            </Container>
        );
    }

}