import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';

const App = ({Routes, offers}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path={Routes.MAIN}>
        <Main offers={offers} />
      </Route>
      <Route exact path={Routes.LOGIN} >
        <Login />
      </Route>
      <Route exact path={Routes.FAVORITES}>
        <Favorites offers={offers}/>
      </Route>
      <Route exact path={Routes.ROOM}>
        <Room offers={offers} />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  Routes: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired
};

export default App;
