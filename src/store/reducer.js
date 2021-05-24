import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const initialState = {
  city: `Paris`,
  offers: [],
  cityOffers: [],
  offer: {},
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  userName: ``,
  activeCard: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case ActionType.CHOOSE_CITY_OFFERS:
      return {
        ...state,
        cityOffers: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
      };
    case ActionType.SET_OFFER:
      return {
        state,
        offer: action.payload
      };
    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload
      };
    case ActionType.CHANGE_USER_NAME:
      return {
        ...state,
        userName: action.payload
      };
    case ActionType.SET_ACTIVE_CARD:
      return {
        ...state,
        activeCard: action.payload
      };
    default:
      return state;
  }
};

export {reducer};
