import * as React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PureIcon from '../../style/Icons';
import Grid from '@material-ui/core/Grid';

type S = {
  imgSrc: string,
  c_width: number,
};

class Canvas extends React.Component<any, S> {
  constructor() {
    super();
    this.state = {
      imgSrc: '',
      c_width: 0,
    };
    this.img = React.createRef();
  }
  handleSubmit = event => {
    event.preventDefault();
    var reader = new FileReader();
    reader.onload = e => {
      this.setState({ imgSrc: e.target.result });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  handleClick = event => {
    event.preventDefault();
    const ctx = event.target.getContext('2d');
    const native = event.nativeEvent;
    const posX = native.offsetX;
    const posY = native.offsetY;
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.arc(posX, posY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#f44253';
    ctx.fill();
  };

  update = () => {
    this.setState({
      c_width: this.img.current.offsetWidth,
    });
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          {this.state.imgSrc && (
            <div style={{ position: 'relative' }}>
              <img
                id="up-img"
                src={this.state.imgSrc}
                alt="something"
                style={{ height: 300 }}
                ref={this.img}
              />

              <canvas
                width={this.state.c_width}
                height={300}
                style={{
                  position: 'relative',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                onClick={this.handleClick}
              />
            </div>
          )}
        </Grid>
        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            id="fab-submit"
            style={{ display: 'none' }}
            onInput={this.handleSubmit}
          />
          <label htmlFor="fab-submit">
            <Button component="span">Upload</Button>
          </label>
          {this.state.imgSrc && <Button onClick={this.update}>Update</Button>}
        </Grid>
      </Grid>
    );
  }
}

export default Canvas;
