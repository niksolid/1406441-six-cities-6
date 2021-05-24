export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_OFFER: `SET_OFFERS`,
  LOAD_OFFERS: `data/loadOffers`,
  CHOOSE_CITY_OFFERS: `data/offersSelection`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  CHANGE_USER_NAME: `user/changeUserName`,
  REDIRECT_TO_ROUTE: `login/redirectToRoute`,
  SET_ACTIVE_CARD: `setActiveCard`,
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
