import React from 'react';
import { Toolbar, Chip } from '@material-ui/core';

const handleDelete = (filter, action) => () => {
  action(filter);
};

const FilterBar = props => (
  <Toolbar>
    Filters:
    {props.filters.map(f => (
      <Chip key={f} onDelete={handleDelete(f, props.removeFilter)} label={f} />
    ))}
  </Toolbar>
);

export default FilterBar;
