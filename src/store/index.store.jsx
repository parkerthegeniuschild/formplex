import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "../reducers/index.reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [logger, thunk];
const { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ } = window;
const composeEnhancer = __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(...middlewares)),
);

export default store;
