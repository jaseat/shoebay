import { FilterTypes as types } from '../action-types';

export function addFilter(filter) {
  return {
    type: types.ADD_FILTER,
    filter,
  };
}

export function removeFilter(filter) {
  return {
    type: types.REMOVE_FILTER,
    filter,
  };
}
