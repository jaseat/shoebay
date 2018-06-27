import React, { Component } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class InputRangeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 0, max: 200 },
    };
  }
  handleChange = value => {
    this.setState({ value });
  };
  render() {
    return (
      <div style={{ padding: '16px', width: '128px' }}>
        <InputRange
          maxValue={200}
          minValue={0}
          value={this.state.value}
          onChange={this.handleChange}
          onChangeComplete={this.props.priceChange}
        />
      </div>
    );
  }
}

export default InputRangeContainer;
