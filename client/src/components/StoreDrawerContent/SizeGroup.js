import React from 'react';
//material-ui
import { Button, Grid } from '@material-ui/core';
//custom
import { ExpansionDecor } from './ExpansionDecor';
//redux
import { connect } from 'react-redux';
import { addFilter } from '../../actions/filter';
//types
import type { FILTER_ACTION } from '../../@flow-types';

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

type P = {
  addFilter: (key: string, value: number | string) => FILTER_ACTION,
  variant: 'raised' | 'flat' | 'outlined',
  color: 'primary' | 'secondary' | 'default',
  size: number,
};

class WrappedButton extends React.PureComponent<P> {
  handleClick = e => {
    e.preventDefault();
    this.props.addFilter('size', this.props.size);
  };
  render() {
    return (
      <React.Fragment>
        <Button
          disableFocusRipple
          disableRipple
          variant={this.props.variant}
          color={this.props.color}
          size="small"
          onClick={this.handleClick}
          style={{ margin: 2 }}
        >
          {this.props.size}
        </Button>
      </React.Fragment>
    );
  }
}

const SizeGroup = (props: any) => {
  return (
    <Grid container justify="center">
      {sizes.map(size => {
        return (
          <WrappedButton
            key={size}
            size={size}
            variant={props.choosenSize === size ? 'raised' : 'outlined'}
            color={props.choosenSize === size ? 'primary' : 'default'}
            addFilter={props.addFilter}
          />
        );
      })}
    </Grid>
  );
};

const ConnectedSizeGroup = connect(
  state => ({
    choosenSize: state.filter.filters.size,
  }),
  { addFilter }
)(SizeGroup);

export default ExpansionDecor(ConnectedSizeGroup, 'Size');
