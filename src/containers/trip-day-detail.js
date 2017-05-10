import React from 'react';
import {connect, Provider} from 'react-redux';
import store from './../redux/store';

import TripDayDetail from './../components/trip-day-detail';

const mapStateToProps = (state) => ({
    trips: state.trips
});

const Container = connect(mapStateToProps)(TripDayDetail);

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