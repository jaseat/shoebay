import { connect } from 'react-redux';
import TitleBar from './TitleBar';

export default connect(
  state => ({ userId: state.user.userId }),
  null
)(TitleBar);
