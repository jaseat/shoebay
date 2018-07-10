import * as React from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  TextField,
  Grid,
} from '@material-ui/core';
//custom
import PureIcon from '../../style/Icons';
//redux
import { connect } from 'react-redux';
import { userLogin } from '../../actions/user';
//type
import type { USER_ACTION } from '../../@flow-types';

import * as API from '../../utils/api';

type P = {
  userLogin: (id: string) => USER_ACTION,
  closeParent?: void => void,
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
    username_error: null,
    email_error: null,
    password_error: null,
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
    // this.props.userLogin('1234');
    // this._handleCloseDialog();
    if (this.state.user_password != this.state.user_confirm_pass)
      return this.setState({ password_error: "Passwords don't match" });
    const newUser = {
      username: this.state.user_name,
      email: this.state.user_email,
      password: this.state.user_password,
    };
    API.signUp(newUser)
      .then(user => {
        this.props.userLogin(user.id);
        if (this.props.closeParent) this.props.closeParent();
      })
      .catch(err => {
        let username_error = null;
        let email_error = null;
        let password_error = null;
        err.forEach(e => {
          if (
            e.message === 'Username already in use' ||
            e.message === 'Validation len on username failed'
          )
            username_error = e.message;
          else if (
            e.message === 'Email already in use' ||
            e.message === 'Validation isEmail on email failed'
          )
            email_error = e.message;
        });
        this.setState({ username_error, email_error, password_error });
      });
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
            <Grid container alignItems="flex-end" spacing={8}>
              <Grid item xs={1}>
                <PureIcon iconType="AccountBox" color="primary" />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  id="user_name"
                  label="User Name"
                  fullWidth
                  error={this.state.username_error != null}
                  helperText={this.state.username_error}
                  value={this.state.user_name}
                  onChange={this._handleInput('user_name')}
                />
              </Grid>
              <Grid item xs={1}>
                <PureIcon iconType="Email" color="primary" />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  id="user_email"
                  label="Email"
                  fullWidth
                  error={this.state.email_error != null}
                  helperText={this.state.email_error}
                  value={this.state.user_email}
                  onChange={this._handleInput('user_email')}
                />
              </Grid>
              <Grid item xs={1}>
                <PureIcon iconType="LockPlus" color="primary" />
              </Grid>
              <Grid item md={5} xs={11}>
                <TextField
                  id="user-password"
                  label="Password"
                  type="password"
                  error={this.state.password_error != null}
                  helperText={this.state.password_error}
                  fullWidth
                  value={this.state.user_password}
                  onChange={this._handleInput('user_password')}
                />
              </Grid>
              <Grid item xs={1} />
              <Grid item md={5} xs={11}>
                <TextField
                  id="confirm-password"
                  label="Confirm Password"
                  type="password"
                  error={this.state.password_error != null}
                  helperText={this.state.password_error}
                  fullWidth
                  value={this.state.user_confirm_pass}
                  onChange={this._handleInput('user_confirm_pass')}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this._handleCloseDialog}>Cancel</Button>
            <Button
              color="primary"
              onClick={this._handleSignup}
              variant="raised"
            >
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
