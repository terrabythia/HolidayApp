'use strict';

import React from 'react';
import {Dimensions, View, Image, Text, ScrollView, TouchableOpacity, ListView} from 'react-native';
import {Container, Content, Thumbnail, Card, CardItem, Header, Left, Right, Body, Button, Icon, Title} from 'native-base';
import MapView from 'react-native-maps';
import ActionButton from 'react-native-action-button';
import TripDayItem from './trip-day-item';
import Lightbox from 'react-native-lightbox';

const SCREEN_DIMENSIONS = Dimensions.get('window');

export default class extends React.Component {

    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            mounted: false,
            dataSource: ds.cloneWithRows([
                1
            ]),
            visibleRows: null
        };
    }

    _onScroll = (event) => {
        if(event.nativeEvent.contentOffset.y > 400) {
            // TODO: animate header in
        }
        else {
            // TODO: animate header out
        }
    };

    _visibleRowsChanged = (visibleRows, changedRows) => {
        // this.setState({
        //     visibleRows: visibleRows
        // });
    };

    _renderRow = (rowData, sectionID, rowID, highlightRow) => {
        console.log('render row', rowData);
        return <TripDayItem
            loadMap={true}
            loadImages={null!==this.state.visibleRows}
            onPress={() => this.props.navigation.navigate('TripDayDetail')} />;
    };

    componentDidMount() {
        setTimeout(() => this.setState({mounted: true}), 300);
    }


    render() {

        let days = [
            1, 2, 3, 4
        ];

        return (
            <View>
                <ScrollView onScroll={this._onScroll}
                            scrollEventThrottle={200}>

                    <ScrollView
                        horizontal={true}
                        pagingEnabled={true}>
                        <Lightbox navigator={this.props.navigator}>
                            <Image style={{width: SCREEN_DIMENSIONS.width, height: SCREEN_DIMENSIONS.width}} source={require('./../resources/img/lesbos-1.jpg')} />
                        </Lightbox>
                        <Lightbox navigator={this.props.navigator}>
                            <Image style={{width: SCREEN_DIMENSIONS.width, height: SCREEN_DIMENSIONS.width}} source={require('./../resources/img/lesbos-2.jpg')} />
                        </Lightbox>
                        <Lightbox navigator={this.props.navigator}>
                            <Image style={{width: SCREEN_DIMENSIONS.width, height: SCREEN_DIMENSIONS.width}} source={require('./../resources/img/lesbos-3.jpg')} />
                        </Lightbox>
                        <Lightbox navigator={this.props.navigator}>
                            <Image style={{width: SCREEN_DIMENSIONS.width, height: SCREEN_DIMENSIONS.width}} source={require('./../resources/img/lesbos-4.jpg')} />
                        </Lightbox>
                    </ScrollView>
                    <View style={{ height: 5, width: SCREEN_DIMENSIONS.width, backgroundColor: this.props.navigation.state.params.color }}>
                    </View>

                    <View>
                        <View>
                            <ScrollView
                                horizontal={true}>
                                <Thumbnail square style={{width: 100, height: 100}} source={require('./../resources/img/lesbos-1.jpg')} />
                                <Thumbnail square style={{width: 100, height: 100}} source={require('./../resources/img/lesbos-2.jpg')} />
                                <Thumbnail square style={{width: 100, height: 100}} source={require('./../resources/img/lesbos-3.jpg')} />
                                <Thumbnail square style={{width: 100, height: 100}} source={require('./../resources/img/lesbos-4.jpg')} />
                                <Thumbnail square style={{width: 100, height: 100}} source={require('./../resources/img/lesbos-3.jpg')} />
                                <Thumbnail square style={{width: 100, height: 100}} source={require('./../resources/img/lesbos-4.jpg')} />
                            </ScrollView>
                            <Button block style={{margin: 10}}>
                                <Text>6 nieuwe fotos. Klik hier om ze toe te voegen.</Text>
                            </Button>
                        </View>

                        <ListView
                            removeClippedSubviews={false}
                            pageSize={2}
                            onChangeVisibleRows={this._visibleRowsChanged}
                            scrollRenderAheadDistance={100}
                            dataSource={this.state.dataSource}
                            renderRow={this._renderRow}>
                        </ListView>

                    </View>

                    <View style={{ height: 100 }} />

                </ScrollView>
                <View style={{
                    width: SCREEN_DIMENSIONS.width,
                    position: 'absolute',
                    flexDirection: 'row' }}>
                    <Button transparent
                            style={{top: 10, left: 0}}
                            onPress={() => this.props.navigation.goBack()}>
                        <Icon style={{color: 'white'}} name="arrow-back" />
                    </Button>
                </View>

                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#1abc9c' title="Voeg een verslag toe" onPress={() => {}}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Voeg foto's toe" onPress={() => {}}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Voeg video's toe" onPress={() => {}}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                    <ActionButton.Item buttonColor='#1abc9c' title="Voeg een route toe" onPress={() => {}}>
                        <Icon name="md-done-all" style={styles.actionButtonIcon} />
                    </ActionButton.Item>
                </ActionButton>

            </View>
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