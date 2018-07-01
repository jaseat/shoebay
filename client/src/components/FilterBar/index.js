import FilterBar from './FilterBar';
import { connect } from 'react-redux';
import { addFilter, removeFilter } from '../../actions/filter';

export default connect(
  state => ({ filters: state.filter.filters }),
  { addFilter, removeFilter }
)(FilterBar);
