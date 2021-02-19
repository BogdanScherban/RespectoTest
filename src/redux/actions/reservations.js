import { createRequestTypes } from "./helper";

export const RESERVATIONS_ACTION = createRequestTypes('RESERVATIONS_ACTION');

export const reservationsAction = {
    request: data => ({ type: RESERVATIONS_ACTION.REQUEST, data }),
    success: data => ({ type: RESERVATIONS_ACTION.SUCCESS, data }),
    error:   error => ({ type: RESERVATIONS_ACTION.FAILURE, error }),
};
