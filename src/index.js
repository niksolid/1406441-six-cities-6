import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const Routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id?`
};


ReactDOM.render(
    <App
      Routes = {Routes}
      offers = {offers}
    />,
    document.querySelector(`#root`)
);
