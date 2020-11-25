import { all } from "redux-saga/effects";
import { loginSaga } from "./login/login.action";
import { mainSaga } from "./main/main.action";

export default function* rootSaga() {
  yield all([loginSaga(), mainSaga()]);
}
