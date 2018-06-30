import * as React from 'react';
import { Snackbar, Chip } from '@material-ui/core';
import type { FILTER_ACTION } from '../../@flow-types';

type P = {
  filters: {},
  removeFilter: (name: string) => FILTER_ACTION,
};

class WrappedChip extends React.PureComponent<any> {
  deleteChip = () => {
    this.props.delete(this.props.n);
  };
  render() {
    const { v, n, onDelete } = this.props;
    return <Chip label={v} onDelete={this.deleteChip} />;
  }
}

const FilterBar = (props: P) => {
  const values = Object.values(props.filters);
  const names = Object.keys(props.filters);
  return (
    <Snackbar
      open={values.length > 0}
      message={
        <div>
          {values.map((v: any, i) => {
            return (
              <WrappedChip
                key={v}
                v={v}
                n={names[i]}
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
