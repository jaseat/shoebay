import React from 'react';
//material-ui
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Grid,
} from '@material-ui/core';
//custom
import PureIcon from '../../style/Icons';
//redux
import { connect } from 'react-redux';
import { userLogin } from '../../actions/user';
//types
import type { USER_ACTION } from '../../@flow-types';

import * as API from '../../utils/api';

type P = {
  userLogin: (id: string) => USER_ACTION,
  closeParent?: void => void,
};

type S = {
  open_dialog: boolean,
  is_btn_active: boolean,
  user_email: string,
  user_password: string,
};

class LoginBtnDlg extends React.Component<P, S> {
  state = {
    open_dialog: false,
    is_btn_active: false,
    user_email: '',
    user_password: '',
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
    if (!this.state.is_btn_active) {
      if (this._isCompleted('user_email') && this._isCompleted('user_password'))
        this.setState({ is_btn_active: true });
    }
  };

  _isCompleted = (name: string): boolean => {
    if (this.state[name].length > 0) return true;
    return false;
  };

  _handleLogin = (): void => {
    const credentials = {
      email: this.state.user_email,
      password: this.state.user_password,
    };
    API.logIn(credentials)
      .then(id => {
        this.props.userLogin(id);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <Button variant="flat" onClick={this._handleOpenDialog}>
          <PureIcon iconType="LogIn" />
          Login
        </Button>
        <Dialog
          open={this.state.open_dialog}
          keepMounted
          onClose={this._handleCloseDialog}
        >
          <DialogTitle id="login-dialog">Log In</DialogTitle>
          <DialogContent>
            <Grid container spacing={8} alignItems="flex-end">
              <Grid item xs={1}>
                <PureIcon iconType="Email" color="primary" />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  label="Email"
                  fullWidth
                  value={this.state.user_email}
                  onChange={this._handleInput('user_email')}
                />
              </Grid>
              <Grid item xs={1}>
                <PureIcon iconType="LockQuestion" color="primary" />
              </Grid>
              <Grid item xs={11}>
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  value={this.state.user_password}
                  onChange={this._handleInput('user_password')}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this._handleCloseDialog}>Cancel</Button>
            <Button
              disabled={!this.state.is_btn_active}
              onClick={this._handleLogin}
              variant="raised"
              color="primary"
            >
              Log In
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
)(LoginBtnDlg);
