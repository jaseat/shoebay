import * as React from 'react';
import { Snackbar, Chip } from '@material-ui/core';
import type { FILTER_ACTION } from '../../@flow-types';

type P = {
  filters: {},
  removeFilter: (key: string) => FILTER_ACTION,
};

class WrappedChip extends React.PureComponent<{
  value: string,
  name: string,
  delete: (name: string) => FILTER_ACTION,
}> {
  deleteChip = () => {
    this.props.delete(this.props.name);
  };
  render() {
    return <Chip label={this.props.value} onDelete={this.deleteChip} />;
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
