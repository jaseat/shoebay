import React, { Component } from 'react';
//material-ui
import { Radio, RadioGroup, FormControlLabel, Button } from '@material-ui/core';
//custom
import { ExpansionDecor } from './ExpansionDecor';
//redux
import { connect } from 'react-redux';
import * as actions from '../../actions/filter';
//types
import type { FILTER_ACTION } from '../../@flow-types';

type P = {
  value: string,
  addFilter: (key: string, value: string) => FILTER_ACTION,
  removeFilter: (key: string) => FILTER_ACTION,
};

class DepartmentGroup extends Component<P> {
  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.props.addFilter('department', event.currentTarget.value);
  };

  handleClear = (): void => {
    this.props.removeFilter('department');
  };

  render() {
    return (
      <div>
        <RadioGroup
          name="department"
          value={this.props.value}
          onChange={this.handleChange}
        >
          <FormControlLabel
            value="Women"
            control={<Radio color="primary" />}
            label="Women"
          />
          <FormControlLabel
            value="Men"
            control={<Radio color="primary" />}
            label="Men"
          />
        </RadioGroup>
        <Button onClick={this.handleClear} variant="flat">
          Clear
        </Button>
      </div>
    );
  }
}

let ConnectedDepartmentGroup = connect(
  state => ({
    value: state.filter.filters.department,
  }),
  actions
)(DepartmentGroup);

export default ExpansionDecor(ConnectedDepartmentGroup, 'Department');
