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
  addFilter: (key: string, value: string | number) => FILTER_ACTION,
};

class PriceGroup extends Component<P> {
  handleClick = (value: string) => {
    return () => {
      const { addFilter } = this.props;
      switch (value) {
        case priceBrackets[0]:
          addFilter('minPrice', 0);
          addFilter('maxPrice', 2500);
          break;
        case priceBrackets[1]:
          addFilter('minPrice', 2500);
          addFilter('maxPrice', 5000);
          break;
        case priceBrackets[2]:
          addFilter('minPrice', 5000);
          addFilter('maxPrice', 10000);
          break;
        case priceBrackets[3]:
          addFilter('minPrice', 10000);
          addFilter('maxPrice', 20000);
          break;
        case priceBrackets[4]:
          addFilter('minPrice', 20000);
          addFilter('maxPrice', 9999999);
          break;
      }
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
