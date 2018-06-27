import React from 'react';
import { Drawer, List, withStyles } from '@material-ui/core';
import ListData from './ListData';
import InputRangeContainer from './InputRangeContainer';

const drawerWidth = 240;

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    height: '80vh',
  },
});

const SideDrawer = props => (
  <Drawer variant="permanent" classes={{ paper: props.classes.drawerPaper }}>
    <List dense disablePadding>
      <ListData handleClick={props.addFilter} />
      <InputRangeContainer priceChange={props.priceChange} />
    </List>
  </Drawer>
);

export default withStyles(styles)(SideDrawer);
