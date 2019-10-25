import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers/index.reducer";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas/index.saga";

const sagaMiddleware = createSagaMiddleware();

const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window;
const composeEnhancer = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
