import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory, createHashHistory } from "history";
import { syncHistoryWithStore } from "react-router-redux";
import rootSaga from "./sagas";
import rootReducer from "./rootReducer";
import environment from "environment";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const browserHistory = createHashHistory({
   basename: process.env.PUBLIC_URL || environment.basePath || ""
});

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
