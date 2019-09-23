import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

// PAGES COMPONENTS
import PageProfile from "./views/pages/profile";
import Login from "./views/pages/login";

export function Routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/react-github"
          component={PageProfile}
        />
      </Switch>
    </BrowserRouter>
  );
}
