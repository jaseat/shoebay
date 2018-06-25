import { connect } from "react-redux";
import TitleBar from "./TitleBar";

export default connect(
  state => ({ isUserLoggedIn: state.isUserLoggedIn }),
  null
)(TitleBar);
