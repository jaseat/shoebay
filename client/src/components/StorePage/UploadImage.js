import * as React from 'react';
import { Button, Grid } from '@material-ui/core';

const plcUrl =
  'http://via.placeholder.com/400x300?text=*.jpeg *.jpg *.png *.bmp';

type P = {
  inpt_id: string,
  height: number,
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

  handleUpload = (event: SyntheticInputEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (this.state.src) {
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
        .then(data => {
          let parsedData = JSON.parse(data);
          console.log(parsedData);
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      console.log('upload img first');
    }
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          {this.state.src ? (
            <img
              src={this.state.src}
              alt="user-img"
              style={{ height: this.props.height }}
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
            id={this.props.inpt_id}
            style={{ display: 'none' }}
            onInput={this.handleSubmitImg}
          />
          <label htmlFor={this.props.inpt_id}>
            <Button variant="raised" color="primary" component="span">
              Upload
            </Button>
          </label>
          <Button variant="raised" color="primary" onClick={this.handleUpload}>
            Find
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default UploadImage;
