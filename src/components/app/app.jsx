import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
// import PropTypes from 'prop-types';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';

const App = () => (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <Main />
      </Route>
      <Route
        exact
        path={AppRoute.LOGIN}
      >
        <Login />
      </Route>
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => {
          return (
            <Favorites />
          );
        }}
      />
      <Route exact path={AppRoute.ROOM}>
        <Room />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  // Routes: PropTypes.object.isRequired,
};

export default App;
