import { FilterTypes as types } from '../action-types';
import type { FILTER_ACTION } from '../@flow-types';

export function addFilter(name: string, value: string): FILTER_ACTION {
  return {
    type: types.ADD_FILTER,
    payload: {
      name,
      value,
    },
  };
}

export function removeFilter(name: string): FILTER_ACTION {
  return {
    type: types.REMOVE_FILTER,
    payload: {
      name,
    },
  };
}
