import { FilterTypes as types } from '../action-types';

const initialState = {
  filters: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case types.ADD_FILTER:
      //Check if filter already exists
      //If not add it otherwise return the current state
      if (!state.filters.find(e => e === action.filter))
        return Object.assign({}, state, {
          filters: [...state.filters, action.filter],
        });
      else return state;
    case types.REMOVE_FILTER:
      //Find index of filter to remove
      //If index !== -1 (i.e. filter is in array) remove that filter
      //Otherwise return the current state
      const idx = state.filters.findIndex(e => e === action.filter);
      console.log(idx);
      if (idx !== -1) {
        const newFilter = [...state.filters];
        newFilter.splice(idx, 1);
        return Object.assign({}, state, {
          filters: newFilter,
        });
      } else return state;
    default:
      return state;
  }
}
