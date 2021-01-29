import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Settings from "routes/Settings";
import MainPage from "routes/MainPage";
import Nav from './Nav';

function AppRouter({ categories }) {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/settings" >
          <Settings categories={categories}/>
        </Route>
        <Route exact path="/" >
          <MainPage categories={categories}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter
