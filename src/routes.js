import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";

// PAGES COMPONENTS
import PageProfile from "./views/pages/profile";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PageProfile} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
