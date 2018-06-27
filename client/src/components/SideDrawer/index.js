import SideDrawer from './SideDrawer';
import { connect } from 'react-redux';
import * as actions from '../../actions/filter';

export default connect(
  state => ({
    priceRange: state.filter.priceRange,
  }),
  actions
)(SideDrawer);
