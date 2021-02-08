import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';
// import Login from '../login/login';
// import Favorites from '../favorites/favorites';
// import Room from '../property/property';

const App = ({cardsQuantity}) => <Main cardsQuantity={cardsQuantity} />;
// const App = () => <Login />;
// const App = () => <Favorites />;
// const App = () => <Room />;

App.propTypes = {
  cardsQuantity: PropTypes.array.isRequired,
};

export default App;
