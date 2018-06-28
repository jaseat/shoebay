import { UserTypes as types } from '../action-types';
import type { USER_ACTION } from '../@flow-types';

export const userLogin = (userId: string): USER_ACTION => {
  return {
    type: types.LOGIN,
    payload: { userId },
  };
};

export const userLogout = (userId: null): USER_ACTION => {
  return {
    type: types.LOGOUT,
    payload: { userId },
  };
};
