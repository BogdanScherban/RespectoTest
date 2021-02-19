import { all } from "redux-saga/effects";

import reservations from "./reservations";

export default function* rootSaga() {

    const sagas = [
        reservations,
    ];

    yield all(sagas);
}
