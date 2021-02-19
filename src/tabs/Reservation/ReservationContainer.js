import React from 'react';
import get from "lodash/get";
import { connect } from 'react-redux';

import { reservationsAction } from '../../redux/actions/reservations';
import ReservationComponent from './ReservationComponent';

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => ({
    getDevicesInfo(currentDate) {
        dispatch(reservationsAction.request(currentDate));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationComponent);

