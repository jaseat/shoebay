import * as React from 'react';
import { Snackbar, Chip, AppBar } from '@material-ui/core';

import { handleClickHOC } from '../HOC';

const ChipOnClick = handleClickHOC(Chip, 'onDelete');

type P = {
  filters: Array<string>,
  removeFilter: (filter: string) => Object,
};

const FilterBar = (props: P) => (
  <Snackbar
    open={props.filters.length > 0 ? true : false}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    message={
      <span>
        Filters:
        {props.filters.map(f => (
          <ChipOnClick
            key={f}
            value={f}
            handleClick={props.removeFilter}
            label={f}
          />
        ))}
      </span>
    }
  />
);

export default FilterBar;
