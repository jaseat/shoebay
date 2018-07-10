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
      var minPrice = 0;
      var maxPrice = 0;
      switch (value) {
        case priceBrackets[0]:
          minPrice = 0;
          maxPrice = 2500;
          break;
        case priceBrackets[1]:
          minPrice = 2500;
          maxPrice = 5000;
          break;
        case priceBrackets[2]:
          minPrice = 5000;
          maxPrice = 10000;
          break;
        case priceBrackets[3]:
          minPrice = 10000;
          maxPrice = 20000;
          break;
        case priceBrackets[4]:
          minPrice = 20000;
          maxPrice = 999999999;
          break;
      }
      this.props.addFilter('minPrice', minPrice);
      this.props.addFilter('maxPrice', maxPrice);
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
