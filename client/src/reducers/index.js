import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import filter from './filter';
import user from './user';

export default combineReducers({
  routing: routerReducer,
  filter,
  user,
});
