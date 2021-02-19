import get from "lodash/get";
import { DEVICES_ACTION } from "../actions/devices";

const initialState = {
    data: null,
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case DEVICES_ACTION.REQUEST:
            return {
                ...state,
                loading: true,
            };
        case DEVICES_ACTION.SUCCESS:
            return {
                ...state,
                loading: false,
                data: get(action, "data", []),
            };
        case DEVICES_ACTION.FAILURE:
            return {
                ...state,
                loading: false,
                data: get(action, "error", null),
            };
        default:
            return state;
    }
}
