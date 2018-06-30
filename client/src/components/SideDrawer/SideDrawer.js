import * as React from 'react';
import { Drawer, withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';

type P = {
  classes: Object,
  children: React.Element<void>,
};

type S = { mobileOpen: boolean };

const styles = theme => ({
  drawerPaper: {
    width: 300,
    position: 'fixed',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      position: 'relative',
      height:
        window.innerHeight -
        theme.mixins.toolbar.minHeight -
        theme.spacing.unit,
    },
    [theme.breakpoints.up('md')]: {
      width: 300,
    },
  },
});

class SideDrawer extends React.Component<P, S> {
  state = {
    mobileOpen: false,
  };
  toggleMobileDrawer = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  render() {
    const { classes, children } = this.props;
    return (
      <React.Fragment>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" classes={{ paper: classes.drawerPaper }}>
            {children}
          </Drawer>
        </Hidden>
        <Hidden smUp>
          <SwipeableDrawer
            open={this.state.mobileOpen}
            onClose={this.toggleMobileDrawer}
            onOpen={this.toggleMobileDrawer}
            classes={{ paper: classes.drawerPaper }}
          >
            {children}
          </SwipeableDrawer>
        </Hidden>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SideDrawer);
