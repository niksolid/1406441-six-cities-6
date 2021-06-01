import {
  requiredAuthorization,
  changeUserName,
  redirectToRoute,
  loadOffers,
  loadOffer,
  loadNearbyOffers,
  loadComments,
} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../const';

export const fetchOfferList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.HOTELS)
    .then(({data}) => dispatch(loadOffers(data)))
);

export const fetchOfferOpened = (id) => (dispatch, _getState, api) => (
  Promise.all([
    api.get(`${APIRoute.HOTELS}/${id}`),
    api.get(`${APIRoute.HOTELS}/${id}/nearby`),
    api.get(`${APIRoute.COMMENTS}/${id}`),
  ])
    .then(([offer, nearby, comments]) => {
      // console.log(nearby.data)
      dispatch(loadOffer(offer.data));
      dispatch(loadNearbyOffers(nearby.data));
      dispatch(loadComments(comments));
    })
    // .catch((err) => {
    //   const {response} = err;
    //   switch (response.status) {
    //     case HttpCode.NOT_FOUND:
    //       dispatch(redirectToRoute(Routes.NOT_FOUND));
    //       break;
    //     default:
    //       dispatch(setErrorMessage(response.status));
    //       break;
    //   }
    // })
);

// export const fetchOfferNearby = () => (dispatch, _getState, api) => (
//   api.get(APIRoute.NEARBY)
//     .then(({data}) => dispatch(loadNearbyOffers(data)))
// );

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data: {email}}) => {
      dispatch(requiredAuthorization(AuthorizationStatus.AUTH));
      dispatch(changeUserName(email));
    })
    .catch(() => {
    })
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
