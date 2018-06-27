import React from 'react';

export function handleClickHOC(WrappedComponent, onFunction) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.onFunctionProp = {
        [onFunction]: this.handleClick,
      };
    }
    handleClick = e => {
      if (e && 'preventDefault' in e) e.preventDefault();
      this.props.handleClick(this.props.value);
    };
    shouldComponentUpdate(nextProps) {
      return this.props.value !== nextProps.value;
    }
    render() {
      const { handleClick, value, ...other } = this.props;
      return <WrappedComponent {...this.onFunctionProp} {...other} />;
    }
  };
}
