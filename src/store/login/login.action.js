import { put, call, takeLatest } from "redux-saga/effects";
import service from "../../services/service";
import { history } from "../store";
import LoginConstant from "./login.constant";

export const loginAction = {
  login: (data) => {
    return { type: LoginConstant.ASYNC_LOGIN, data };
  },
};

function* login({ data }) {
  const { user } = data;
  function success(msg) {
    return { type: LoginConstant.LOGIN_SUCCESS, payload: msg };
  }
  function failure(error) {
    return { type: LoginConstant.LOGIN_FAILURE, error };
  }
  try {
    if (data.success) {
      console.log(data);
      yield put(success({ user }));
      history.push("main");
    } else throw new Error("Login Failure");
  } catch (e) {
    yield put(failure(e.message));
  }
}

export function* loginSaga() {
  yield takeLatest(LoginConstant.ASYNC_LOGIN, login);
}
