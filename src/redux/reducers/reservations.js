import get from "lodash/get";
import { RESERVATIONS_ACTION } from "../actions/reservations";

const initialState = {
    data: [
        { id: 1, model: 'HTC One M8', sku: 'HT519WM00429' },
        { id: 2, model: 'Motorola Moto X 2014', sku: 'TA9890AQPQ' },
    ],
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
        default:
            return state;
    }
}