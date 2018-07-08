import * as types from '../action-types';

export type USER_ACTION = {
  type: typeof types.UserTypes.LOGIN | typeof types.UserTypes.LOGOUT,
  userId: string | null,
};

export type FILTER_ACTION = {
  type:
    | typeof types.FilterTypes.REMOVE_FILTER
    | typeof types.FilterTypes.ADD_FILTER,
  payload: {
    name: string,
    value?: string,
  },
};

export type THEME_ACTION = {
  type: typeof types.ThemeTypes.USE_DARK,
  payload: {
    value: boolean,
  },
};

export type STATE = {};
