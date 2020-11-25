import React from "react";
const MainPage = React.lazy(() => import("./views/mainPage"));

const routes = [
  { path: "/", exact: true, name: "default" },
  { path: "/main", exact: true, name: "Login Screen", component: MainPage },
];

export default routes;
