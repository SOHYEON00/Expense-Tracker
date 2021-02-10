import React from 'react';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Settings from "routes/Settings";
import Home from "routes/Home";
import Nav from './Nav';

function AppRouter({ categories, mainColor }) {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/settings" >
          <Settings categories={categories} mainColor={mainColor}/>
        </Route>
        <Route exact path="/" >
          <Home categories={categories}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter
