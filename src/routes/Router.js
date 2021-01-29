import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Setting from "routes/Setting";
import MainPage from "routes/MainPage";

function AppRouter() {
    return (
      <Router>
        <Switch>
          <Route exact path="/setting">
              <Setting />
          </Route>
          <Route exact path="/">
              <MainPage/>
          </Route>
        </Switch>
      </Router>
    );
}

export default AppRouter
