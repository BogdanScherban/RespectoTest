import { takeEvery, delay, put } from 'redux-saga/effects';

import { RESERVATIONS_ACTION, reservationsAction } from "../actions/reservations";

import { getReservationsByDay, updateDevicesInfo } from '../dummyData/reservations';

export const getReservationsByDate = takeEvery(RESERVATIONS_ACTION.REQUEST, function*(action) {
    try {
        yield delay(2000);
        const reservations = getReservationsByDay(action.data);
        yield put(reservationsAction.success(reservations));
    } catch(e) {
        yield put(reservationsAction.error(e))
    }
});

export const addNewReservation = takeEvery(RESERVATIONS_ACTION.RESERVE, function*(action) {
    try {
        yield delay(2000);
        const reservations = updateDevicesInfo(action.data);
        yield put(reservationsAction.reserveSuccess(reservations));
    } catch(e) {
        yield put(reservationsAction.error(e))
    }
});