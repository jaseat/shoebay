import { PageTypes as types } from '../action-types';
import type { PAGE_ACTION, STATE } from '../@flow-types';

type S = {
  page: number,
};
const initialState: S = {
  page: 1,
};

export default function(state: S = initialState, action: PAGE_ACTION): STATE {
  switch (action.type) {
    case types.NEXT_PAGE:
      return Object.assign({}, state, { page: state.page + 1 });
    case types.REFRESH_PAGE:
      return state;
    default:
      return state;
  }
}
