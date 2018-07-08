import * as React from 'react';
//material-ui
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
//custom
import { ExpansionDecor } from './ExpansionDecor';
//redux
import { connect } from 'react-redux';
import { addFilter } from '../../actions/filter';
//type
import type { FILTER_ACTION } from '../../@flow-types';

const categories: Array<string> = [
  'Athletic',
  'Fashion Sneakers',
  'Boots',
  'Sandals',
  'Loafers',
  'Oxfords',
  'Outdoor',
  'Work',
];

type P = {
  value: string,
  addFilter: (key: string, value: string) => FILTER_ACTION,
};

class CategoryGroup extends React.Component<P> {
  handleChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    this.props.addFilter('category', event.currentTarget.value);
  };

  render() {
    return (
      <RadioGroup
        name="category"
        value={this.props.value}
        onChange={this.handleChange}
      >
        {categories.map((category, i) => {
          return (
            <FormControlLabel
              key={category + i}
              value={category}
              control={<Radio color="primary" />}
              label={category}
            />
          );
        })}
      </RadioGroup>
    );
  }
}

let ConnectedCategoryGroup = connect(
  state => ({ value: state.filter.filters.category }),
  { addFilter }
)(CategoryGroup);

export default ExpansionDecor(ConnectedCategoryGroup, 'Categories');
