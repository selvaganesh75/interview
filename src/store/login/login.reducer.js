import loginConstant from "./login.constant";

const initialState = {
  loginError: false,
  loginSuccess: false,
  userData: {},
};

export default function loginReducer(state = initialState, action) {
  const newState = { ...state };

  if (action.type === loginConstant.LOGIN_FAILURE) {
    newState.loginError = action.payload;
    newState.loginSuccess = false;
    newState.userData = {};
  }
  if (action.type === loginConstant.LOGIN_SUCCESS) {
    newState.loginSuccess = true;
    newState.loginError = false;
    newState.userData = action.payload;
  }

  return newState;
}
