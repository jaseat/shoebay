import React from 'react';
import { Drawer, withStyles } from '@material-ui/core';
import DepartmentGroup from './DepartmentGroup';
import PriceGroup from './PriceGroup';
import SizeGroup from './SizeGroup';
const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 280,
    height:
      window.innerHeight - theme.mixins.toolbar.minHeight - theme.spacing.unit,
  },
});

const SideDrawer = props => (
  <Drawer variant="permanent" classes={{ paper: props.classes.drawerPaper }}>
    <DepartmentGroup />
    <PriceGroup />
    <SizeGroup />
  </Drawer>
);

export default withStyles(styles)(SideDrawer);
