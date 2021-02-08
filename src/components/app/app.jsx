import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Room from '../room/room';
import NotFound from '../not-found/not-found';

const App = ({cardsQuantity}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Main cardsQuantity={cardsQuantity} />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/favorites">
        <Favorites />
      </Route>
      <Route exact path="/offer/:id?">
        <Room/>
      </Route>
      <Route >
        <NotFound />
      </Route>
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  cardsQuantity: PropTypes.array.isRequired,
};

export default App;
