import * as React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { addFilter } from '../../actions/filter';
import { connect } from 'react-redux';
//types
import type { FILTER_ACTION } from '../../@flow-types';

const plcUrl =
  'http://via.placeholder.com/400x300?text=*.jpeg *.jpg *.png *.bmp';

type P = {
  inpt_id: string,
  height: number,
  addFilter: (key: string, value: string) => FILTER_ACTION,
};
type S = {
  src: null | string,
};

class UploadImage extends React.Component<P, S> {
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

  handleUpload = () => {
    if (this.state.src !== null) {
      var base64 = this.state.src.replace(/^data:image\/\w+;base64,/, '');
      fetch('/vision/img', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image: base64 }),
      })
        .then(response => {
          return response.json();
        })
        .then(visiondata => {
          console.log(visiondata);
          this.props.addFilter('query', visiondata);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <Grid
        container
        justify="space-between"
        alignItems="flex-start"
        spacing={8}
      >
        <Grid item xs={12}>
          <img
            src={this.state.src || plcUrl}
            alt="user-img"
            style={{ height: this.props.height, width: '100%' }}
            onLoad={this.handleUpload}
          />
        </Grid>
        <Grid item xs={12}>
          <input
            type="file"
            accept="image/*"
            id={this.props.inpt_id}
            style={{ display: 'none' }}
            onInput={this.handleSubmitImg}
          />
          <label htmlFor={this.props.inpt_id}>
            <Button variant="raised" color="primary" component="span" fullWidth>
              Upload
            </Button>
          </label>
        </Grid>
      </Grid>
    );
  }
}

export default connect(
  null,
  { addFilter }
)(UploadImage);
