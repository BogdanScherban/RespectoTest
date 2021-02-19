import get from "lodash/get";
import { RESERVATIONS_ACTION } from "../actions/reservations";
import { devices } from "../dummyData/reservations";

const initialState = {
    total: devices,
    data: null,
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case RESERVATIONS_ACTION.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case RESERVATIONS_ACTION.SUCCESS:
            return {
                ...state,
                loading: false,
                data: get(action, "data", []),
            };
        case RESERVATIONS_ACTION.FAILURE:
            return {
                ...state,
                loading: false,
                data: get(action, "error", null),
            };
        case RESERVATIONS_ACTION.RESERVE:
            return {
                ...state,
                loading: true,
            };
        case RESERVATIONS_ACTION.RESERVE_SUCCESS:
            return {
                ...state,
                loading: false,
                total: get(action, "data", []),
            };
        default:
            return state;
    }
}
