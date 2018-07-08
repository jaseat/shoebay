import * as React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import PureIcon from '../../style/Icons';

type P = {
  width: number,
  height: number,
  color: string,
};

type S = {
  points: Array<{ x: number, y: number }>,
};

class Canvas extends React.Component<P, S> {
  canvas: { current: null | React$ElementRef<typeof HTMLCanvasElement> };
  constructor() {
    super();
    this.state = {
      points: [],
    };
    this.canvas = React.createRef();
  }

  drawPoint = (event: Object) => {
    event.preventDefault();
    const ctx = event.currentTarget.getContext('2d');
    //getting mouse position inside canvas
    const posX = event.nativeEvent.offsetX;
    const posY = event.nativeEvent.offsetY;
    ctx.beginPath();
    ctx.moveTo(posX, posY);
    ctx.arc(posX, posY, 8, 0, 2 * Math.PI);
    ctx.fillStyle = this.props.color;
    ctx.fill();
    this.setState(prevState => ({
      points: [...prevState.points, { x: posX, y: posY }],
    }));
  };

  drawShape = (method: 'fill' | 'stroke') => (
    event: SyntheticEvent<HTMLButtonElement>
  ) => {
    if (this.state.points.length > 0) {
      const { width, height } = this.props;
      const { points } = this.state;
      // $FlowFixMe
      const ctx = this.canvas.current.getContext('2d');
      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = this.props.color;
      ctx.strokeStyle = this.props.color;
      //moving to starting point
      ctx.moveTo(points[0].x, points[0].y);
      //going throught all remaining points and connecting them with lines
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      switch (method) {
        case 'fill':
          return ctx.fill();
        case 'stroke':
          return ctx.stroke();
      }
      ctx.closePath();
    }
  };

  clear = () => {
    const { width, height } = this.props;
    if (this.canvas.current) {
      const ctx = this.canvas.current.getContext('2d');
      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      this.setState({ points: [] });
    }
  };

  render() {
    return (
      <Grid
        container
        // spacing={32}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Grid item xs={11}>
          <canvas
            ref={this.canvas}
            width={this.props.width}
            height={this.props.height}
            style={{
              border: '1px solid #f44253',
            }}
            onClick={this.drawPoint}
          />
        </Grid>
        <Grid item xs={1}>
          <Button variant="outlined" onClick={this.drawShape('fill')}>
            Fill
          </Button>
          <Button variant="outlined" onClick={this.drawShape('stroke')}>
            Line
          </Button>
          <Button variant="outlined" onClick={this.clear}>
            Clear
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default Canvas;
