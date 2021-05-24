import {requiredAuthorization, changeUserName, redirectToRoute, loadOffers} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data: {email}}) => {
      dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(changeUserName(email));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => {
      dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(changeUserName(email));
    })
    .then(() => dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGOUT)
    .then(() => {
      dispatch(requiredAuthorization(AuthorizationStatus.NO_AUTH));
    })
);
