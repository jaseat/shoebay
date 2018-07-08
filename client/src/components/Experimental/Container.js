import * as React from 'react';
import AddImage from './AddImage';
import Canvas from './Canvas';
import Button from '@material-ui/core/Button';

type P = {
  inpt_id: string,
  height: number,
  color: string,
};
type S = {
  width: null | number,
};

class Container extends React.Component<P, S> {
  state = {
    width: null,
  };
  setWidth = (width: number) => {
    this.setState({ width: width });
  };
  render() {
    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <AddImage
          height={this.props.height}
          inpt_id={this.props.inpt_id}
          setWidth={this.setWidth}
        />
        {this.state.width && (
          <Canvas
            height={this.props.height}
            width={this.state.width}
            color={this.props.color}
          />
        )}
      </div>
    );
  }
}

export default Container;
