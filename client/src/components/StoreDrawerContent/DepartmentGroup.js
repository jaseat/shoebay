import React, { Component } from 'react';
import { ExpansionDecor } from './ExpansionDecor';

import { connect } from 'react-redux';
import * as actions from '../../actions/filter';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

class DepartmentGroup extends Component<any, { value: string }> {
  handleChange = event => {
    this.props.addFilter('Department', event.target.value);
  };
  handleClear = () => {
    this.props.removeFilter('Department');
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

const ConnectedDepartmentGroup = connect(
  state => ({
    value: state.filter.filters.Department,
  }),
  actions
)(DepartmentGroup);

export default ExpansionDecor(ConnectedDepartmentGroup, 'Department');
