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

// const buttonStyles = {
//   minWidth: 50,
//   minHeight: 50,
//   border: '1px solid black',
//   borderRadius: 5,
//   backgroundColor: '#fff',
//   margin: 4,
//   outline: 'none',
// };

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
            <Grid item xs={4} key={s}>
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

export default connect(
  null,
  { addFilter }
)(ExpansionDecor(SizeGroup, 'Sizes'));
