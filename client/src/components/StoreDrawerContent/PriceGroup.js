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

const priceBrackets: Array<string> = [
  'Under $25',
  '$25-$50',
  '$50-$100',
  '$100-$200',
  'Over $200',
];

type P = {
  addFilter: (key: string, value: string) => FILTER_ACTION,
};

class PriceGroup extends Component<P> {
  handleClick = (value: string) => {
    return () => {
      this.props.addFilter('price', value);
    };
  };
  render() {
    return (
      <List style={{ width: '100%' }}>
        {priceBrackets.map(b => {
          return (
            <ListItem button onClick={this.handleClick(b)} key={b}>
              <Typography variant="body2">{b}</Typography>
            </ListItem>
          );
        })}
      </List>
    );
  }
}

const ConnectedPriceGroup = connect(
  null,
  { addFilter }
)(PriceGroup);

export default ExpansionDecor(ConnectedPriceGroup, 'Price Range');
