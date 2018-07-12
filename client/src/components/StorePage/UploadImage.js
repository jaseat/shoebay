import * as React from 'react';
import { Button, Grid, FormControlLabel, Checkbox } from '@material-ui/core';
import { addFilter } from '../../actions/filter';
import { connect } from 'react-redux';
//types
import type { FILTER_ACTION } from '../../@flow-types';

const plcUrl =
  'http://via.placeholder.com/300x300?text=*.jpeg *.jpg *.png *.bmp';

type P = {
  inpt_id: string,
  height: number,
  addFilter: (key: string, value: string) => FILTER_ACTION,
};
type S = {
  src: null | string,
  checked: boolean,
};

class UploadImage extends React.Component<P, S> {
  state = {
    src: null,
    checked: false,
  };

  handleCheckChange = () => {
    this.setState({ checked: !this.state.checked }, () => {
      this.handleUpload();
    });
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
    const { src, checked } = this.state;
    if (src !== null) {
      //this allows to use label or web detection
      var URL = '';
      if (checked) {
        URL = '/vision/img/web';
      } else {
        URL = '/vision/img/label';
      }
      //this
      var base64 = src.replace(/^data:image\/\w+;base64,/, '');
      fetch(URL, {
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
          this.props.addFilter('query', visiondata);
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  render() {
    return (
      <div style={{ with: this.props.height, maxWidth: 'auto' }}>
        <img
          src={this.state.src || plcUrl}
          alt="user-img"
          style={{
            maxHeight: this.props.height,
            height: 'auto',
            width: 'auto',
            display: 'block',
            margin: 'auto',
          }}
          onLoad={this.handleUpload}
        />

        <input
          type="file"
          accept="image/*"
          id={this.props.inpt_id}
          style={{ display: 'none' }}
          onInput={this.handleSubmitImg}
        />
        <br />
        <FormControlLabel
          control={
            <Checkbox
              checked={this.state.checked}
              onChange={this.handleCheckChange}
              value="brand"
              color="primary"
            />
          }
          label="Try to guess which brand"
        />
        <label htmlFor={this.props.inpt_id}>
          <Button variant="raised" color="primary" component="span" fullWidth>
            Upload
          </Button>
        </label>
      </div>
    );
  }
}

export default connect(
  null,
  { addFilter }
)(UploadImage);
