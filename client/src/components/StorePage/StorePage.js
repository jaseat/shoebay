import React, { Component } from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import FilterBar from '../FilterBar';
import StoreDrawerContent from '../StoreDrawerContent';
import Canvas from '../SearchContainer/Canvas';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

const StorePage = props => {
  return (
    <div style={{ display: 'flex' }}>
      <FilterBar />
      <SideDrawer>
        <StoreDrawerContent />
      </SideDrawer>
      <div style={{ flexGrow: 1 }}>
        <Canvas />
      </div>
    </div>
  );
};

export default StorePage;
