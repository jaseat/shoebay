import * as React from 'react';
import { Drawer, withStyles, SwipeableDrawer, Hidden } from '@material-ui/core';

type P = {
  classes: { drawerPaper: {} },
  children: React.Node,
};

type S = { mobileOpen: boolean };

const styles = theme => ({
  drawerPaper: {
    width: window.innerWidth,
    position: 'fixed',
    [theme.breakpoints.up('sm')]: {
      width: 240,
      position: 'relative',
      height:
        window.innerHeight -
        theme.mixins.toolbar.minHeight -
        theme.spacing.unit,
    },
    [theme.breakpoints.up('md')]: {
      width: 280,
    },
  },
});

class SideDrawer extends React.Component<P, S> {
  state = {
    mobileOpen: false,
  };

  toggleMobileDrawer = (): void => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, children } = this.props;

    return (
      <React.Fragment>
        <Hidden xsDown implementation="js">
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
