import * as React from 'react';
import { IconButton, Popover, MenuItem } from '@material-ui/core';
//custom
import PureIcon from '../../style/Icons';
import LoginBtnDlg from './LoginBtnDlg';
import SignUpBtnDlg from './SignUpBtnDlg';
//redux
import { connect } from 'react-redux';
import { userLogout } from '../../actions/user';
import { changeTheme } from '../../actions/theme';
//type
import type { USER_ACTION, THEME_ACTION } from '../../@flow-types';

type P = {
  userId: string,
  darkTheme: boolean,
  userLogout: (id: null) => USER_ACTION,
  changeTheme: (darkTheme: boolean) => THEME_ACTION,
};

type S = {
  anchorEl: null | HTMLButtonElement,
};

class PhoneMenu extends React.Component<P, S> {
  state = {
    anchorEl: null,
  };

  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  _handleLogOut = () => {
    this.props.userLogout(null);
    this.handleClose();
  };

  changeTheme = () => {
    this.props.changeTheme(!this.props.darkTheme);
  };

  render() {
    return (
      <React.Fragment>
        <IconButton
          aria-owns={this.state.anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <PureIcon iconType="DotsVertical" color="secondary" />
        </IconButton>
        <Popover
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <MenuItem>
            <PureIcon iconType="Store" />Store
          </MenuItem>
          <MenuItem>
            <PureIcon iconType="Blog" />Blog
          </MenuItem>
          {this.props.userId === null ? (
            <div>
              <LoginBtnDlg />
              <br />
              <SignUpBtnDlg />
            </div>
          ) : (
            <div>
              <MenuItem onClick={this.handleClose}>
                <PureIcon iconType="AccountBox" />Profile
              </MenuItem>
              <MenuItem onClick={this.changeTheme}>
                <PureIcon iconType="Theme" />Change Theme
              </MenuItem>
              <MenuItem onClick={this.handleClose}>
                <PureIcon iconType="Settings" />Settings
              </MenuItem>
              <MenuItem onClick={this._handleLogOut}>
                <PureIcon iconType="LogOut" />Logout
              </MenuItem>
            </div>
          )}
        </Popover>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ userId: state.user.userId, darkTheme: state.theme.darkTheme }),
  { userLogout, changeTheme }
)(PhoneMenu);
