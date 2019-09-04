import React from "react";
import { Route, Switch, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";

// PAGES COMPONENTS
import PageProfile from "./views/pages/profile";
import Login from "./views/pages/login";

export function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={props =>
            !!props.user ? (
              <Redirect to="/login" />
            ) : (
              <Route exact path="/" component={PageProfile} />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
}
