import React, { Component } from "react";
import { Route, Switch, Router } from "react-router-dom";
import "./App.scss";
import routes from "./routes";
import { PrivateRoute } from "./Routing/private-route";
import { history } from "./store/store";
import { FormattedMessage } from "react-intl";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);

// Pages
const Login = React.lazy(() => import("./views/login/login"));
const NotFound = React.lazy(() => import("./views/404/index"));

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <React.Suspense fallback={loading()}>
          <Switch>
            <Route
              path="/login"
              exact
              render={(props) => <Login {...props} />}
            />
            {routes.map((route, index) => (
              <PrivateRoute key={index} {...route} />
            ))}
            <Route
              name="Page 404"
              render={(props) => <NotFound {...props} />}
            />
          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
