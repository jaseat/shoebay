import React from 'react';
import ReactDOM from 'react-dom';
import { List } from 'react-virtualized';
import list from '../List/List';
import request from 'request';

function rowRenderer({
  key, // Unique key within array of rows
  index, // Index of row within collection
  isScrolling, // The List is currently being scrolled
  isVisible, // This row is visible within the List (eg it is not an overscanned row)
  style, // Style object to be applied to row (to position it)
}) {
  return (
    <div key={key} style={style}>
      {list[index]}
    </div>
  );
}

export default rowRenderer;
