import React, { Component } from 'react';
//material-ui
import { List, ListItem, Typography } from '@material-ui/core';
//custom
import { ExpansionDecor } from './ExpansionDecor';
//redux
import { connect } from 'react-redux';
import { addFilter } from '../../actions/filter';
//types
import type { FILTER_ACTION } from '../../@flow-types';

type P = {
  addFilter: (key: string, value: string) => FILTER_ACTION,
};

const widthSizes = ['XXN', 'XN', 'N', 'M', 'W', 'XW', 'XXW'];

class WidthGroup extends Component<P> {
  handleClick = value => {
    return () => {
      //this if we want to have description in ()
      // let newValue = value.split(' ');
      // console.log(newValue[0]);
      // newValue = newValue[1].replace(/[)]/g, '');
      this.props.addFilter('width', value);
    };
  };
  render() {
    return (
      <List style={{ width: '100%' }}>
        {widthSizes.map(w => {
          return (
            <ListItem button onClick={this.handleClick(w)} key={w}>
              <Typography variant="body2">{w}</Typography>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

const ConnectedWidthGroup = connect(
  null,
  { addFilter }
)(WidthGroup);

export default ExpansionDecor(ConnectedWidthGroup, 'Width');
