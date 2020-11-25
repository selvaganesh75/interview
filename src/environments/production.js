import environment from "./base";

// production backend url

export const obj = {
   basePath: "interview/",
  login: "https://selvaganesh75.github.io/interview/user.json",
};
const env = environment(obj);

export default {
  ...env,
  isProduction: true,
  isDevelopment: false,
};
