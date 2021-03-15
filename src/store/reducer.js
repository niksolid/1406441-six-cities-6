import {ActionType} from './action';
import {offers} from '../mocks/offers';

const initialState = {
  city: `Amsterdam`,
  cards: offers
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state
      };
  }

  return state;
};

export default reducer;
