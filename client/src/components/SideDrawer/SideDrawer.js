import React from 'react';
import { Drawer, List } from '@material-ui/core';
import ListData from './ListData';

const SideDrawer = props => (
  <Drawer variant="permanent">
    <List dense disablePadding>
      <ListData handleClick={props.addFilter} />
    </List>
  </Drawer>
);

export default SideDrawer;
