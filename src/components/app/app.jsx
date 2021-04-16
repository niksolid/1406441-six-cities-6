import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';
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
        {/* // render={({history}) => {
        //   return (
        //     <Login
        //     />
        //   );
        // }
        // }
      // /> */}
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
