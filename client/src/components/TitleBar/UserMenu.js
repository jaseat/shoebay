import * as React from 'react';
//material-ui
import { Button, Popover, MenuItem } from '@material-ui/core';
//custom
import PureIcon from '../../style/Icons';
//router
import { Link } from 'react-router-dom';
//redux
import { userLogout } from '../../actions/user';
import { changeTheme } from '../../actions/theme';
import { connect } from 'react-redux';
//types
import type { USER_ACTION, THEME_ACTION } from '../../@flow-types';

import * as API from '../../utils/api';

type P = {
  userLogout: (id: null) => USER_ACTION,
  changeTheme: (value: boolean) => THEME_ACTION,
  darkTheme: boolean,
};

type S = {
  anchorEl: ?HTMLButtonElement,
};

class UserMenu extends React.Component<P, S> {
  constructor(props: any) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  _handleLogOut = () => {
    this.props.userLogout(null);
    API.logOut()
      .then(id => {
        this.props.userLogout(id);
      })
      .catch(err => {
        console.log(err);
      });
    // this.handleClose();
  };
  changeTheme = () => {
    this.props.changeTheme(!this.props.darkTheme);
  };
  render() {
    return (
      <React.Fragment>
        <Button
          aria-label="Menu"
          aria-owns={this.state.anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <PureIcon iconType="Menu" />
          Menu
        </Button>
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
          <MenuItem variant="flat" onClick={this.handleClose}>
            <PureIcon iconType="AccountBox" />Profile
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <PureIcon iconType="Settings" />Settings
          </MenuItem>
          <MenuItem onClick={this.changeTheme}>
            <PureIcon iconType="Theme" />Change Theme
          </MenuItem>
          <MenuItem onClick={this._handleLogOut}>
            <PureIcon iconType="LogOut" />Logout
          </MenuItem>
        </Popover>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({ darkTheme: state.theme.darkTheme }),
  { userLogout, changeTheme }
)(UserMenu);
