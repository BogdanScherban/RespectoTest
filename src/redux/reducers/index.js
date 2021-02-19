import { combineReducers } from "redux";

import devices from './devices';
import reservations from './reservations';

export default combineReducers({
   devices,
   reservations,
});