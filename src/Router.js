import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import ImageView from "./components/ImageView";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/image-search" component={App} exact />
        <Route path="/image/:id" component={ImageView} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;