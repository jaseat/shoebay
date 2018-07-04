import * as React from 'react';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PureIcon from '../../style/Icons';
import Grid from '@material-ui/core/Grid';

type S = {
  imgSrc: string,
};

class Canvas extends React.Component<any, S> {
  constructor() {
    super();
    this.state = {
      imgSrc: '',
    };
    this.fileInput = React.createRef();
  }

  handleSubmit = event => {
    event.preventDefault();
    var reader = new FileReader();
    reader.onload = e => {
      this.setState({ imgSrc: e.target.result });
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          {this.state.imgSrc && (
            <img
              src={this.state.imgSrc}
              alt="something"
              style={{ height: 200 }}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            ref={this.fileInput}
            id="fab-submit"
            style={{ display: 'none' }}
            onInput={this.handleSubmit}
          />
          <label htmlFor="fab-submit">
            <Button variant="fab" color="secondary" component="span">
              <PureIcon iconType="DotsVertical" />
            </Button>
          </label>
        </Grid>
      </Grid>
    );
  }
}

export default Canvas;
