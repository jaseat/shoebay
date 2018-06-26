import FilterBar from './FilterBar';
import { connect } from 'react-redux';
import * as actions from '../../actions/filter';

export default connect(
  state => ({ filters: state.filter.filters }),
  actions
)(FilterBar);
