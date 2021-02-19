import { createRequestTypes } from "./helper";

export const DEVICES_ACTION = createRequestTypes('DEVICES_ACTION');

export const devicesAction = {
    request: data => ({ type: DEVICES_ACTION.REQUEST, data }),
    success: data => ({ type: DEVICES_ACTION.SUCCESS, data }),
    error:   error => ({ type: DEVICES_ACTION.FAILURE, error }),
};
