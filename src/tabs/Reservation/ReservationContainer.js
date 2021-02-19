import React from 'react';
import get from "lodash/get";
import { connect } from 'react-redux';

import { reservationsAction } from '../../redux/actions/reservations';
import ReservationComponent from './ReservationComponent';

const mapStateToProps = state => {
    return {
        reservations: get(state, 'reservations.data', []),
        loading: get(state, 'reservations.loading', true)
    };
};

const mapDispatchToProps = dispatch => ({
    getDevicesInfo: currentDate => {
        dispatch(reservationsAction.request(currentDate));
    },
    handleSubmit: (e, data) => {
        e.preventDefault();
        dispatch(reservationsAction.reserve(data));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReservationComponent);


