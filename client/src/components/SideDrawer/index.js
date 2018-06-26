import SideDrawer from './SideDrawer';
import { connect } from 'react-redux';
import * as actions from '../../actions/filter';

export default connect(
  null,
  actions
)(SideDrawer);
