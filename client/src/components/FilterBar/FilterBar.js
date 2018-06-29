import * as React from 'react';
import { Snackbar, Chip } from '@material-ui/core';
import type { FILTER_ACTION } from '../../@flow-types';

type P = {
  filters: {},
  removeFilter: (name: string) => FILTER_ACTION,
};

const deleteChip = (key, method) => {
  return () => {
    method(key);
  };
};

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
              <Chip
                label={`${names[i]}: ${v}`}
                key={v}
                onDelete={deleteChip(names[i], props.removeFilter)}
              />
            );
          })}
        </div>
      }
    />
  );
};

export default FilterBar;
