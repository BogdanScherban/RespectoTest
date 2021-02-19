import { takeEvery, select, delay, put } from 'redux-saga/effects';

import { RESERVATIONS_ACTION, reservationsAction } from "../actions/reservations";

import { getReservationsByDay, updateDevicesInfo } from '../dummyData/reservations';

const getTotal = (state) => state.reservations.total;

export const getReservationsByDate = takeEvery(RESERVATIONS_ACTION.REQUEST, function*(action) {
    try {
        yield delay(1000);
        const total = yield select(getTotal);
        const reservations = getReservationsByDay(total, action.data);
        yield put(reservationsAction.success(reservations));
    } catch(e) {
        yield put(reservationsAction.error(e))
    }
});

export const addNewReservation = takeEvery(RESERVATIONS_ACTION.RESERVE, function*(action) {
    try {

        yield delay(1000);
        const newReservations = updateDevicesInfo(action.data);
        yield put(reservationsAction.reserveSuccess(newReservations));

        const total = yield select(getTotal);
        const reservations = getReservationsByDay(total, action.data.date);
        yield put(reservationsAction.success(reservations));

    } catch(e) {
        yield put(reservationsAction.error(e))
    }
});