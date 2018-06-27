import React from 'react';
import { Toolbar, Chip } from '@material-ui/core';

import { handleClickHOC } from '../HOC';

const ChipOnClick = handleClickHOC(Chip, 'onDelete');

const FilterBar = props => (
  <Toolbar>
    Filters:
    {props.filters.map(f => (
      <ChipOnClick
        key={f}
        value={f}
        handleClick={props.removeFilter}
        label={f}
      />
    ))}
  </Toolbar>
);

export default FilterBar;
