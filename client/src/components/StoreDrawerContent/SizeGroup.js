import React, { Component } from 'react';
import { ExpansionDecor } from './ExpansionDecor';

import { connect } from 'react-redux';
import { addFilter } from '../../actions/filter';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const sizes = [
  4,
  4.5,
  5,
  5.5,
  6,
  6.5,
  7,
  7.5,
  8,
  8.5,
  9,
  9.5,
  10,
  10.5,
  11,
  11.5,
  12,
  13,
  14,
  15,
  16,
];

class SizeGroup extends Component<any> {
  handleClick = value => {
    return e => {
      e.preventDefault();
      this.props.addFilter('Size', value);
    };
  };

  render() {
    return (
      <Grid container alignItems="flex-start" justify="space-between">
        {sizes.map(s => {
          return (
            <Grid item xs={3} sm={6} md={4} key={s}>
              <Button
                variant="outlined"
                size="small"
                onClick={this.handleClick(s)}
              >
                {s}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

const ConnectedSizeGroup = connect(
  null,
  { addFilter }
)(SizeGroup);

export default ExpansionDecor(ConnectedSizeGroup, 'Sizes');
