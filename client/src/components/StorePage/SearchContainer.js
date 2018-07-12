import * as React from 'react';

type P = {
  children: React.Node,
};
class SearchContainer extends React.Component<P> {
  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      background: '#abcabc',
    };
    return <div style={style}>{this.props.children}</div>;
  }
}

export default SearchContainer;
