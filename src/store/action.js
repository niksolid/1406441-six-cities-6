export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  SET_OFFERS: `SET_OFFERS`,
  LOAD_OFFERS: `data/loadOffers`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  REDIRECT_TO_ROUTE: `login/redirectToRoute`,
  CHANGE_USER_NAME: `user/changeUserName`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  setOffers: () => ({
    type: ActionType.SET_OFFERS
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers
  }),
  requiredAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  changeUserName: (userName) => ({
    type: ActionType.CHANGE_USER_NAME,
    payload: userName
  })
};
