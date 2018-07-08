import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import filter from './filter';
import user from './user';
import theme from './theme';

export default combineReducers({
  routing: routerReducer,
  filter,
  user,
  theme,
});
