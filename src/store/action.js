export const ActionType = {
  CHANGE_CITY: `main/changeCity`,
  SET_OFFER: `main/setOffers`,
  SET_ACTIVE_CARD: `main/setActiveCard`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER: `data/loadOffer`,
  LOAD_NEARBY: `data/loadNearby`,
  CHOOSE_CITY_OFFERS: `data/offersSelection`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_USER_NAME: `user/changeUserName`,
  REDIRECT_TO_ROUTE: `login/redirectToRoute`,
};

export const changeCityAction = (city) => ({
  type: ActionType.CHANGE_CITY,
  payload: city
});

export const chooseCityOffers = (cityOffers) => ({
  type: ActionType.CHOOSE_CITY_OFFERS,
  payload: cityOffers
});

export const setOffers = () => ({
  type: ActionType.SET_OFFER
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers
});

export const loadOffer = (offer) => ({
  type: ActionType.LOAD_OFFER,
  payload: offer
});

export const loadNearbyOffers = (nearby) => ({
  type: ActionType.LOAD_NEARBY,
  payload: nearby
});
export const loadComments = (comments) => ({
  type: ActionType.LOAD_NEARBY,
  payload: comments
});

export const requiredAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});

export const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url
});

export const changeUserName = (userName) => ({
  type: ActionType.CHANGE_USER_NAME,
  payload: userName
});

export const setActiveCard = (id) => ({
  type: ActionType.SET_ACTIVE_CARD,
  payload: id
});
