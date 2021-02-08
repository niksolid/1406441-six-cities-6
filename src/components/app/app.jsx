import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = ({cardsQuantity}) => <Main cardsQuantity={cardsQuantity} />;

App.propTypes = {
  cardsQuantity: PropTypes.array.isRequired,
};

export default App;
