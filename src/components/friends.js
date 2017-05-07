'use strict';

import React from 'react';

import {Container, Icon} from 'native-base';
import ActionButton from 'react-native-action-button';

export default class extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Vrienden',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ice-cream" style={{color: tintColor}} />
        ),
    };

    render() {
        return (
            <Container>



                <ActionButton buttonColor="rgba(231,76,60,1)">
                    <ActionButton.Item buttonColor='#1abc9c'
                                       title="Zoek vrienden"
                                       onPress={() => {}}>
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