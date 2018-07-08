import { ThemeTypes as types } from '../action-types';
import type { THEME_ACTION } from '../@flow-types';

export function changeTheme(value: boolean): THEME_ACTION {
  return {
    type: types.USE_DARK,
    payload: {
      value,
    },
  };
}
