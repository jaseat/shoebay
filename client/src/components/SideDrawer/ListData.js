import React from 'react';
import { ListItem } from '@material-ui/core';

import { handleClickHOC } from '../HOC';

const ListValueOnClick = handleClickHOC(ListItem, 'onClick');

const filterList = [
  {
    name: 'Test',
    value: 'Test',
  },
  {
    name: 'Test2',
    value: 'Test2',
  },
  {
    name: 'Test3',
    value: 'Test3',
  },
];

const ListData = props => (
  <div>
    {filterList.map(f => (
      <ListValueOnClick
        component="a"
        href=""
        key={f.name}
        handleClick={props.handleClick}
        value={f.value}
      >
        {f.name}
      </ListValueOnClick>
    ))}
  </div>
);

export default ListData;
