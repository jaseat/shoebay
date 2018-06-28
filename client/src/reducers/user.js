import { UserTypes as types } from '../action-types';
import type { USER_ACTION, STATE } from '../@flow-types';

const initialState: STATE = {
  userId: null,
};

export default function(
  state: STATE = initialState,
  action: USER_ACTION
): STATE {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, { userId: action.payload.userId });
    case types.LOGOUT:
      return Object.assign({}, state, { userId: action.payload.userId });
    default:
      return state;
  }
}
