import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';

const App = ({Routes}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Routes.MAIN}>
        <Main />
      </Route>
      <Route exact path={Routes.LOGIN} >
        <Login />
      </Route>
      <Route exact path={Routes.FAVORITES}>
        <Favorites />
      </Route>
      <Route exact path={Routes.ROOM}>
        <Room />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  Routes: PropTypes.object.isRequired,
};

export default App;
