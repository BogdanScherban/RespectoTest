import { all } from "redux-saga/effects";

import { getReservationsByDate, addNewReservation } from "./reservations";

export default function* rootSaga() {

    const sagas = [
        getReservationsByDate,
        addNewReservation
    ];

    yield all(sagas);
}
