import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import loginReducer from "./login/login.reducer";
import mainReducer from "./main/main.reducer";

const appReducer = combineReducers({
  routing: routerReducer,
  login: loginReducer,
  main: mainReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
