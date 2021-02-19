import { createRequestTypes } from "./helper";

export const RESERVATIONS_ACTION = createRequestTypes('RESERVATIONS_ACTION', {
    RESERVE: 'RESERVE',
    RESERVE_SUCCESS: 'RESERVE_SUCCESS',
});

export const reservationsAction = {
    request: data =>  ({ type: RESERVATIONS_ACTION.REQUEST, data }),
    success: data =>  ({ type: RESERVATIONS_ACTION.SUCCESS, data }),
    error:   error => ({ type: RESERVATIONS_ACTION.FAILURE, error }),
    reserve: data =>  ({ type: RESERVATIONS_ACTION.RESERVE, data }),
    reserveSuccess: data =>  ({ type: RESERVATIONS_ACTION.RESERVE_SUCCESS, data }),
};
