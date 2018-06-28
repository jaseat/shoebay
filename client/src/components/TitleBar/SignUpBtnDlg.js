import * as React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import PureIcon from '../../style/Icons';

import { connect } from 'react-redux';
import { userLogin } from '../../actions/user';
import type { USER_ACTION } from '../../@flow-types';
// props types
//login method
type P = {
  userLogin: (id: string) => USER_ACTION,
};

type S = {
  user_name: string,
  open_dialog: boolean,
  user_email: string,
  user_password: string,
  user_confirm_pass: string,
};

class SignUpBtnDlg extends React.Component<P, S> {
  state = {
    open_dialog: false,
    user_name: '',
    user_email: '',
    user_password: '',
    user_confirm_pass: '',
  };

  _handleOpenDialog = (): void => {
    this.setState({ open_dialog: true });
  };

  _handleCloseDialog = (): void => {
    this.setState({ open_dialog: false });
  };

  _handleInput = (name: string) => (
    event: SyntheticInputEvent<EventTarget>
  ) => {
    this.setState({ [name]: event.target.value });
  };

  _handleSignup = () => {
    this.props.userLogin('1234');
    this._handleCloseDialog();
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="flat" onClick={this._handleOpenDialog}>
          <PureIcon iconType="SignUp" />
          SignUp
        </Button>
        <Dialog
          open={this.state.open_dialog}
          keepMounted
          onClose={this._handleCloseDialog}
        >
          <DialogTitle id="signup-dialog">Sign Up</DialogTitle>
          <DialogContent>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item xs={1}>
                <PureIcon iconType="AccountBox" />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  id="user_name"
                  label="User Name"
                  fullWidth
                  value={this.state.user_name}
                  onChange={this._handleInput('user_name')}
                />
              </Grid>
              <Grid item xs={1}>
                <PureIcon iconType="Email" />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  id="user_email"
                  label="Email"
                  fullWidth
                  value={this.state.user_email}
                  onChange={this._handleInput('user_email')}
                />
              </Grid>
              <Grid item xs={1}>
                <PureIcon iconType="Lock" />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="user-password"
                  label="Password"
                  type="password"
                  fullWidth
                  value={this.state.user_password}
                  onChange={this._handleInput('user_password')}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="confirm-password"
                  label="Confirm Password"
                  type="password"
                  fullWidth
                  value={this.state.user_confirm_pass}
                  onChange={this._handleInput('user_confirm_pass')}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this._handleCloseDialog}>Cancel</Button>
            <Button color="secondary" onClick={this._handleSignup}>
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}
export default connect(
  null,
  { userLogin }
)(SignUpBtnDlg);
