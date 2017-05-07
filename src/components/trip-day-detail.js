'use strict';

import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import {Container, Content, Button, Icon, Header, Right, Left, Body, Title} from 'native-base';
import ActionButton from 'react-native-action-button';

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }

    _setActiveTab = (tabIndex) => {

    };

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Molyvos 2016</Title>
                    </Body>
                    <Right />
                </Header>

                <View
                    style={{flex: 0}}>
                    <ScrollView
                        horizontal={true}>
                        <Button transparent onPress={() => this._setActiveTab(0)}>
                            <Text style={{fontWeight: 'bold'}}>Dag 1</Text>
                        </Button>
                        <Button transparent onPress={() => this._setActiveTab(1)}>
                            <Text>Dag 2</Text>
                        </Button>
                        <Button transparent onPress={() => this._setActiveTab(2)}>
                            <Text>Dag 3</Text>
                        </Button>
                        <Button transparent onPress={() => this._setActiveTab(3)}>
                            <Text>Dag 4</Text>
                        </Button>
                        <Button transparent onPress={() => this._setActiveTab(4)}>
                            <Text>Dag 5</Text>
                        </Button>
                        <Button transparent onPress={() => this._setActiveTab(5)}>
                            <Text>Dag 6</Text>
                        </Button>
                    </ScrollView>
                </View>

                <Content style={{ flex: 1 }}>
                    <ScrollView
                        pagingEnabled={true}
                        horizontal={true}>
                        <View>

                        </View>
                        <View>

                        </View>
                        <View>

                        </View>
                    </ScrollView>
                </Content>

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