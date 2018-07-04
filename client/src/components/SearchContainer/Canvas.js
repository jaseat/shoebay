import * as React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PureIcon from '../../style/Icons';
import Grid from '@material-ui/core/Grid';

type P = {
  width: number,
  height: number,
};
type S = {
  points: Array<{ x: number, y: number }>,
};

const fillStyleColor = 'rgba(244, 86, 66, 0.5 )';

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
    ctx.arc(posX, posY, 10, 0, 2 * Math.PI);
    ctx.fillStyle = fillStyleColor;
    ctx.fill();
    this.setState(prevState => ({
      points: [...prevState.points, { x: posX, y: posY }],
    }));
  };

  drawShape = (event: SyntheticEvent<HTMLButtonElement>) => {
    if (this.state.points.length > 0) {
      const { width, height } = this.props;
      const { points } = this.state;
      // $FlowFixMe
      const ctx = this.canvas.current.getContext('2d');
      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = fillStyleColor;
      //moving to starting point
      ctx.moveTo(points[0].x, points[0].y);
      //going throught all remaining points and connecting them with lines
      for (let i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.closePath();
      ctx.fill();
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
          <Button variant="outlined" onClick={this.drawShape}>
            Fill
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
