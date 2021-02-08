import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_QUANTITY: 5
};

const cardsQuantity = new Array(Setting.CARDS_QUANTITY).fill(``);

ReactDOM.render(
    <App
      cardsQuantity={cardsQuantity}
    />,
    document.querySelector(`#root`)
);
