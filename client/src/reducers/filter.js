import { FilterTypes as types } from '../action-types';
import type { FILTER_ACTION, STATE } from '../@flow-types';

type S = {
  filters: {
    gender?: 'male' | 'female' | null,
  },
};

const initialState: S = {
  filters: {},
};

export default function(state: S = initialState, action: FILTER_ACTION): STATE {
  switch (action.type) {
    case types.ADD_FILTER:
      return Object.assign({}, state, {
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      });
    case types.REMOVE_FILTER:
      if (state.filters[action.payload.name]) {
        const newFilter = { ...state.filters };
        delete newFilter[action.payload.name];
        return Object.assign({}, state, {
          filters: newFilter,
        });
      } else return state;
    default:
      return state;
  }
}
