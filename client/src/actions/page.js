import { PageTypes as types } from '../action-types';
import type { PAGE_ACTION } from '../@flow-types';

export function nextPage(): PAGE_ACTION {
  return {
    type: types.NEXT_PAGE,
  };
}

export function refreshPage(): PAGE_ACTION {
  return {
    type: types.REFRESH_PAGE,
  };
}
