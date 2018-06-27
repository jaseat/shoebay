import * as React from 'react';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import MenuItem from '@material-ui/core/MenuItem';
import PureIcon from '../../style/Icons';
import { Link } from 'react-router-dom';
import { userLogout } from '../../actions/user';
import { connect } from 'react-redux';
import type { USER_ACTION } from '../../@flow-types';

type P = {
  userLogout: (id: null) => USER_ACTION,
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
    this.handleClose();
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
          <MenuItem onClick={this.handleClose}>
            <PureIcon iconType="AccountBox" />Profile
          </MenuItem>
          <MenuItem onClick={this.handleClose}>
            <PureIcon iconType="Settings" />Settings
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
  null,
  { userLogout }
)(UserMenu);
