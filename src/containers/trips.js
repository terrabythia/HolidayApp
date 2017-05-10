import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

import {Icon} from 'native-base';

import Trips from './../components/trips';

const mapStateToProps = (state) => ({
    trips: state.trips
});

const Container = connect(mapStateToProps)(Trips);

export default class extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Reizen',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="plane" style={{color: tintColor}} />
        ),
    };

    render() {
        return <Provider store={store}>
            <Container {...this.props} />
        </Provider>;
    }

}