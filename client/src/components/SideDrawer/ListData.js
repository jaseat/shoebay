import React from 'react';
import { ListItem } from '@material-ui/core';

function getValue(WrappedComponent) {
  return class extends React.Component {
    handleClick = (e, handleClick, value) => {
      e.preventDefault();
      handleClick(value);
    };
    render() {
      const { handleClick, value, ...other } = this.props;
      return (
        <WrappedComponent
          component="a"
          href=""
          onClick={e => this.handleClick(e, handleClick, value)}
          {...other}
        />
      );
    }
  };
}

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

const ListValueOnClick = getValue(ListItem);

const ListData = props => (
  <div>
    {filterList.map(f => (
      <ListValueOnClick
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
