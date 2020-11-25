import environment from "./base";

// production backend url

export const obj = {
  basePath: "interview/",
  login: "/user.json",
};
const env = environment(obj);
export default {
  ...env,
  isProduction: false,
  isDevelopment: true,
};
