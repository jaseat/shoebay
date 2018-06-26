import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import filter from './filter';

export default combineReducers({
  routing: routerReducer,
  filter,
});
