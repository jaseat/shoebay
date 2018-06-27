import { FilterTypes as types } from '../action-types';

const initialState = {
  filters: [],
  priceRange: { min: 0, max: 200 },
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
      if (idx !== -1) {
        const newFilter = [...state.filters];
        newFilter.splice(idx, 1);
        return Object.assign({}, state, {
          filters: newFilter,
        });
      } else return state;
    case types.CHANGE_PRICE:
      const priceFilter = `Price: ${action.value.min}-${action.value.max}`;
      const idx1 = state.filters.findIndex(e => /^Price/.test(e));
      const newFilter = [...state.filters];
      if (idx1 !== -1) newFilter.splice(idx1, 1, priceFilter);
      else newFilter.push(priceFilter);
      return Object.assign({}, state, {
        priceRange: action.value,
        filters: newFilter,
      });
    default:
      return state;
  }
}
