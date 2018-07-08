import { ThemeTypes as types } from '../action-types';
import type { FILTER_ACTION, STATE } from '../@flow-types';

type S = {
  darkTheme: boolean,
};
const initialState: S = {
  darkTheme: false,
};

export default function(state: S = initialState, action: FILTER_ACTION): STATE {
  switch (action.type) {
    case types.USE_DARK:
      return Object.assign({}, state, { darkTheme: action.payload.value });
    default:
      return state;
  }
}
