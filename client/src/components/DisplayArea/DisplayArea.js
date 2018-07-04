import React from 'react';
import 'react-virtualized/styles.css';
import { Column, Table } from 'react-virtualized';
import { List } from 'react-virtualized';
import rowRenderer from '../TestArray/TestArray';
import list from '../List/List';

const listHeight = 600;
const rowHeight = 50;
const rowWidth = 800;

const DisplayArea = props => {
  return (
    <List
      width={300}
      height={300}
      rowCount={list.length}
      rowHeight={20}
      rowRenderer={rowRenderer}
    />
  );
};

export default DisplayArea;
