import {ActionType} from './action';
import {AuthorizationStatus} from '../const';

const initialState = {
  city: `Amsterdam`,
  offers: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  isDataLoaded: false,
  userName: ``
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        city: action.payload
      };
    case ActionType.LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true
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
    default:
      return state;
  }
};

export {reducer};
