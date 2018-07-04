import * as React from 'react';
import AddImage from './AddImage';
import Canvas from './Canvas';
import Button from '@material-ui/core/Button';

type S = {
  width: null | number,
};

class Container extends React.Component<any, S> {
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
          height={300}
          img_id="img-side"
          ipt_id="ipt-side"
          setWidth={this.setWidth}
        />
        {this.state.width && <Canvas height={300} width={this.state.width} />}
      </div>
    );
  }
}

export default Container;
