import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import PureIcon from '../../style/Icons';
import LoginBtnDlg from './LoginBtnDlg';
import SignUpBtnDlg from './SignUpBtnDlg';

import { connect } from 'react-redux';
import { userLogout } from '../../actions/user';

class PhoneMenu extends Component {
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
    this.handleClose();
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
            <PureIcon iconType="Store" />Shop
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
  state => ({ userId: state.user.userId }),
  { userLogout }
)(PhoneMenu);
