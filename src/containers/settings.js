import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

import {Icon} from 'native-base';

import Settings from './../components/settings';

const mapStateToProps = (state) => ({
    trips: state.trips
});
const Container = connect(mapStateToProps)(Settings);

export default class extends React.Component {

    static navigationOptions = {
        tabBarLabel: 'Instellingen',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="settings" style={{color: tintColor}} />
        ),
    };

    render() {
        return <Provider store={store}>
            <Container {...this.props} />
        </Provider>;
    }

}