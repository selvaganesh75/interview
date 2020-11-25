import { put, call, takeLatest } from "redux-saga/effects";
import mainConstant from "./main.constant";

export const mainAction = {
  addNote: (data) => {
    return { type: mainConstant.ASYNC_ADD_NOTE, data };
  },
  removeNote: (data) => ({ type: mainConstant.ASYNC_REMOVE_NOTE, data }),
};

function* addNote({ data }) {
  function success(msg) {
    return { type: mainConstant.ADD_NOTE_SUCCESS, payload: msg };
  }
  try {
    yield put(success(data));
  } catch (e) {
    console.log(e);
  }
}

function* removeNote({ data }) {
  function success(msg) {
    return { type: mainConstant.REMOVE_NOTE_SUCCESS, payload: msg };
  }
  function failure(error) {
    return { type: mainConstant.REMOVE_NOTE_FAILURE, error };
  }
  try {
    yield put(success(data));
  } catch (e) {
    console.log(e);
  }
}

export function* mainSaga() {
  yield takeLatest(mainConstant.ASYNC_ADD_NOTE, addNote);
  yield takeLatest(mainConstant.ASYNC_REMOVE_NOTE, removeNote);
}
