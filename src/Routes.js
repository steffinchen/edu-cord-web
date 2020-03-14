import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import Home from './pages/home';
import Teachers from './pages/teachers';
import Students from './pages/students';

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/teachers" component={withRouter(Teachers)}></Route>
      <Route path="/students" component={withRouter(Students)}></Route>
    </Switch>
  );
};
