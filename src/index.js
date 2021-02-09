import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARDS_QUANTITY: 5
};

const Routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id?`,
}

const cardsQuantity = new Array(Setting.CARDS_QUANTITY).fill(``);

ReactDOM.render(
    <App
      cardsQuantity={cardsQuantity}
      Routes = {Routes}
    />,
    document.querySelector(`#root`)
);
