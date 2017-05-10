import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

import {Icon} from 'native-base';

import Friends from './../components/friends';


const mapStateToProps = (state) => ({
    trips: state.trips
});

const Container = connect(mapStateToProps)(Friends);

export default class extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Vrienden',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ice-cream" style={{color: tintColor}} />
        ),
    };

    render() {
        return <Provider store={store}>
            <Container {...this.props} />
        </Provider>;
    }

}