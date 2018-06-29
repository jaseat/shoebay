import React, { Component } from 'react';
import { ExpansionDecor } from './ExpansionDecor';

import { connect } from 'react-redux';
import { addFilter } from '../../actions/filter';

import { List, ListItem, Typography } from '@material-ui/core';

type P = {
  addFilter: (name: string, value: string) => Object,
};

const priceBrackets = [
  'Under $25',
  '$25-$50',
  '$50-$100',
  '$100-$200',
  'Over $200',
];

class PriceGroup extends Component<P> {
  handleClick = value => {
    return () => {
      this.props.addFilter('Price Range', value);
    };
  };
  render() {
    return (
      <List>
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

export default connect(
  null,
  { addFilter }
)(ExpansionDecor(PriceGroup, 'Price Range'));
