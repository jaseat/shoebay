import React, { Component, Children } from 'react';
import { Drawer, withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';
import DepartmentGroup from './DepartmentGroup';
import PriceGroup from './PriceGroup';
import SizeGroup from './SizeGroup';

const styles = theme => ({
  drawerPaper: {
    width: 300,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
      height:
        window.innerHeight -
        theme.mixins.toolbar.minHeight -
        theme.spacing.unit,
    },
  },
});

class SideDrawer extends Component<any, { mobileOpen: boolean }> {
  state = {
    mobileOpen: false,
  };
  toggleMobileDrawer = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  render() {
    const children = (
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <DepartmentGroup />
        <PriceGroup />
        <SizeGroup />
      </div>
    );

    return (
      <React.Fragment>
        <Hidden smDown implementation="js">
          <Drawer
            variant="permanent"
            classes={{ paper: this.props.classes.drawerPaper }}
          >
            {children}
          </Drawer>
        </Hidden>
        <Hidden mdUp>
          <SwipeableDrawer
            open={this.state.mobileOpen}
            onClose={this.toggleMobileDrawer}
            onOpen={this.toggleMobileDrawer}
            classes={{ paper: this.props.classes.drawerPaper }}
          >
            {children}
          </SwipeableDrawer>
        </Hidden>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SideDrawer);
