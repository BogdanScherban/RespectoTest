import { takeEvery, delay, put } from 'redux-saga/effects';

import { RESERVATIONS_ACTION, reservationsAction } from "../actions/reservations";

import { getReservationsByDay } from '../dummyData/reservations';

export default takeEvery(RESERVATIONS_ACTION.REQUEST, function*(action) {
    try {
        yield delay(3000);
        const reservations = getReservationsByDay(action.data);
        yield put(reservationsAction.success(reservations));
    } catch(e) {
        yield put(reservationsAction.error(e))
    }
});