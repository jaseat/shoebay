import * as React from 'react';
import { Drawer, withStyles } from '@material-ui/core';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Hidden from '@material-ui/core/Hidden';

type P = {
  classes: Object,
  children: React.Node,
};

type S = { mobileOpen: boolean };

const styles = theme => ({
  placeholder: {
    width: 300,
    display: 'inline-block',
    background: theme.palette.secondary.main,
    height:
      window.innerHeight - theme.mixins.toolbar.minHeight - theme.spacing.unit,
    [theme.breakpoints.up('sm')]: {
      width: 200,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
    },
  },
  drawerPaper: {
    width: 300,
    position: 'fixed',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      position: 'fixed',
      top: theme.mixins.toolbar.minHeight + theme.spacing.unit,
      height:
        window.innerHeight -
        theme.mixins.toolbar.minHeight -
        theme.spacing.unit,
    },
    [theme.breakpoints.up('md')]: {
      width: 250,
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
        <Hidden xsDown implementation="js">
          <div className={classes.placeholder} />
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
