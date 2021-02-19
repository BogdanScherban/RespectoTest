import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./sagas";
import combinedReducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
    combinedReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);


sagaMiddleware.run(rootSaga);
