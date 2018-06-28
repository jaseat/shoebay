import { UserTypes as types } from '../action-types';

export type USER_ACTION = {
  type: typeof types.LOGIN | typeof types.LOGOUT,
  payload: {
    userId: string | null,
  },
};

export type STATE = {};
