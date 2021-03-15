import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import offers from './mocks/offers';
import {reducer} from './store/reducer';

const Routes = {
  MAIN: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id?`
};

const store = createStore(reducer, composeWithDevTools());


ReactDOM.render(
    <Provider store={store}>
      <App
        Routes = {Routes}
        offers = {offers}
      />
    </Provider>,
    document.querySelector(`#root`)
);
