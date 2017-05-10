import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

import TripMapView from './../components/trip-mapview';

const mapStateToProps = (state) => ({
    trips: state.trips
});

const Container = connect(mapStateToProps)(TripMapView);

export default class extends React.Component {

    static navigationOptions = {
        title: 'Todos',
    };

    render() {
        return <Provider store={store}>
            <Container {...this.props} />
        </Provider>;
    }

}