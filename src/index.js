import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_QUANTITY: 5
};

let cardsQuantity = [];
for (let i = 0; i < Setting.CARDS_QUANTITY; i++) {
  cardsQuantity[i] = ``;
}

ReactDOM.render(
    <App
      cardsQuantity={cardsQuantity}
    />,
    document.querySelector(`#root`)
);
