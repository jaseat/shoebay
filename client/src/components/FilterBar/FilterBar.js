import * as React from 'react';
import { Snackbar, Chip } from '@material-ui/core';
import type { FILTER_ACTION } from '../../@flow-types';

type P = {
  filters: {},
  removeFilter: (key: string) => FILTER_ACTION,
};

class WrappedChip extends React.PureComponent<{
  value: string | number,
  name: string,
  delete: (name: string) => FILTER_ACTION,
}> {
  deleteChip = () => {
    this.props.delete(this.props.name);
  };
  //this is used only for min/max price
  formatter = (number: number) => {
    //first remove 2 zeroes
    number = number / 100;
    var format = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumIntegerDigits: 1,
      minimumFractionDigits: 0,
    });
    return format.format(number);
  };
  render() {
    const { name, value } = this.props;

    return (
      <React.Fragment>
        {name === 'maxPrice' || name === 'minPrice' ? (
          <Chip
            label={
              name.substr(0, 3).toUpperCase() + ':' + this.formatter(value)
            }
            onDelete={this.deleteChip}
          />
        ) : (
          <Chip label={value} onDelete={this.deleteChip} />
        )}
      </React.Fragment>
    );
  }
}

const FilterBar = (props: P) => {
  const filterValues = Object.values(props.filters);
  const filterNames = Object.keys(props.filters);
  return (
    <Snackbar
      open={filterValues.length > 0}
      message={
        <div>
          {filterValues.map((value: any, i) => {
            return (
              <WrappedChip
                key={value}
                value={value}
                name={filterNames[i]}
                delete={props.removeFilter}
              />
            );
          })}
        </div>
      }
    />
  );
};

export default FilterBar;
