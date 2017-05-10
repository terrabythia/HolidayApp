'use strict';

import React from 'react';
import {View, Text} from 'react-native';
import {Container, Content, Header, Button, Left, Right, Body, Title, Icon, List, ListItem} from 'native-base';

export default class extends React.Component {

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Instellingen</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        <ListItem itemDivider>
                            <Text>Meldingen</Text>
                        </ListItem>
                        <ListItem icon onPress={() => {}}>
                            <Body>
                                <Text>Geef mij dagelijks herinneringen over het aanvullen van mijn dagboek wanneer ik op reis ben</Text>
                            </Body>
                            <Right>
                                <Text>Aan</Text>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }

}