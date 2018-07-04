import * as React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const plcUrl = require('../../style/img/foot-side.png');

type P = {
  ipt_id: string,
  img_id: string,
  height: number,
  setWidth: number => void,
};
type S = {
  src: null | string,
};

class AddImage extends React.Component<P, S> {
  state = {
    src: null,
  };

  handleSubmitImg = (event: SyntheticInputEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.currentTarget.files[0]);
      reader.onloadend = evt => {
        this.setState({
          src: evt.target.result,
        });
      };
    }
  };
  //this will let container know what is image width to adjust canvas
  handleChange = (event: SyntheticEvent<HTMLImageElement>) => {
    event.preventDefault();
    this.props.setWidth(event.currentTarget.offsetWidth);
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          {this.state.src ? (
            <img
              id={this.props.img_id}
              src={this.state.src}
              alt="user-img"
              style={{ height: this.props.height }}
              onLoad={this.handleChange}
            />
          ) : (
            <img
              src={plcUrl}
              alt="placeholder"
              style={{ height: this.props.height }}
            />
          )}
        </Grid>
        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            id={this.props.ipt_id}
            style={{ display: 'none' }}
            onInput={this.handleSubmitImg}
          />
          <label htmlFor={this.props.ipt_id}>
            <Button variant="raised" color="primary" component="span">
              Upload
            </Button>
          </label>
        </Grid>
      </Grid>
    );
  }
}

export default AddImage;
