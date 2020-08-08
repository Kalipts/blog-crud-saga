import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AdminPage from "./components/AdminPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/admin" />} />
          <Route path="/admin" component={AdminPage} />
          <Route path="/error" component={ErrorPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
