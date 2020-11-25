import store from "../store/store";

export function authHeader() {
  // return authorization header with basic auth credentials
  const { userData } = store.getState().login;
  if (userData && userData.user) {
    return { Authorization: "success" };
  } else {
    return {};
  }
}
