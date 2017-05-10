import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

import {Icon} from 'native-base';

import Profile from './../components/profile';

const mapStateToProps = (state) => ({
    trips: state.trips
});

const Container = connect(mapStateToProps)(Profile);

export default class extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Profiel',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="person" style={{color: tintColor}} />
        ),
    };


    render() {
        return <Provider store={store}>
            <Container {...this.props} />
        </Provider>;
    }

}