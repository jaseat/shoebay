import React, { Component } from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import FilterBar from '../FilterBar';
import { withStyles } from '@material-ui/core/styles';
import StoreDrawerContent from '../StoreDrawerContent';
import Container from '../SearchContainer/Container';

const style = theme => ({
  root: {
    zIndex: 1,
    overflow: 'hidden',
    display: 'flex',
  },
  container: {
    flexGrow: 1,
    display: 'inline-block',
    height:
      window.innerHeight - theme.mixins.toolbar.minHeight - theme.spacing.unit,
    overflowY: 'auto',
    padding: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.default,
  },
});

const StorePage = props => {
  return (
    <div className={props.classes.root}>
      <FilterBar />
      <SideDrawer>
        <StoreDrawerContent />
      </SideDrawer>
      <div className={props.classes.container}>
        <Container />
      </div>
    </div>
  );
};

export default withStyles(style)(StorePage);
