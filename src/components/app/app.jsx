import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';

const App = (props) => {
  const {cardsQuantity} = props;

  return (
    <Main cardsQuantity={cardsQuantity} />
  );
};

App.propTypes = {
  cardsQuantity: PropTypes.array.isRequired,
};

export default App;
