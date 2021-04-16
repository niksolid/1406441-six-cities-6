import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {reducer} from './store/reducer';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth} from './store/api-actions';
import {redirect} from './store/middlewares/redirect';


const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(redirect),
        applyMiddleware(thunk.withExtraArgument(api)),
    )
);

// console.log(store.getState())
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
