import * as React from 'react';
//material-ui
import { Button, Grid } from '@material-ui/core';
//custom
import { ExpansionDecor } from './ExpansionDecor';
import { CircleIcon } from '../../style/Icons';
//redux
import { connect } from 'react-redux';
import { addFilter } from '../../actions/filter';
//types
import type { FILTER_ACTION } from '../../@flow-types';

const colors: Array<string> = [
  'black',
  'blue',
  'brown',
  'gray',
  'beige',
  'white',
  'gold',
  'red',
  'yellow',
  'cream',
  'pink',
  'purple',
];

type P = {
  addFilter: (key: string, value: string) => FILTER_ACTION,
  color: string,
  choosenColor: string,
};

class WrappedIcon extends React.PureComponent<P> {
  pickColor = e => {
    e.preventDefault();
    this.props.addFilter('color', this.props.color);
  };
  render() {
    const { color } = this.props;
    return (
      <Button
        variant="fab"
        style={{ margin: 4 }}
        mini
        disableFocusRipple
        disableRipple
        onClick={this.pickColor}
        color={this.props.choosenColor === color ? 'primary' : 'default'}
      >
        <CircleIcon color={color} width={38} height={38} />
      </Button>
    );
  }
}

class ColorGroup extends React.Component<any> {
  render() {
    return (
      <Grid container justify="center">
        {colors.map(color => {
          return (
            <Grid item xs={3} sm={4} md={3} key={color}>
              <WrappedIcon
                color={color}
                choosenColor={this.props.choosenColor}
                addFilter={this.props.addFilter}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
}

let ConnenctedColorGroup = connect(
  state => ({
    choosenColor: state.filter.filters.color,
  }),
  { addFilter }
)(ColorGroup);

export default ExpansionDecor(ConnenctedColorGroup, 'Color');
