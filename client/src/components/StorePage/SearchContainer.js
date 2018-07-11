import React, { Component } from 'react';

class SearchContainer extends Component {
  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      background: '#adadad',
    };
    return <div style={style}>{this.props.children}</div>;
  }
}

export default SearchContainer;
