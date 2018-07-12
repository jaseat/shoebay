import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { postArticle } from '../../utils/api';
import Snackbar from '@material-ui/core/Snackbar';

class BlogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
      snackbar: false,
      errorMessage: '',
    };
  }

  handleChange = (name: string) => (
    event: SyntheticInputEvent<EventTarget>
  ) => {
    this.setState({ [name]: event.target.value });
  };
  handleClose = () => {
    if (this.props.close) this.props.close(false);
  };
  closeSnack = () => {
    this.setState({ snackbar: false });
  };
  handlePost = () => {
    const newArticle = {
      title: this.state.title,
      text: this.state.text,
    };
    postArticle(newArticle)
      .then(a => {
        console.log(a);
        if (this.props.close) this.props.close(true);
      })
      .catch(err => {
        console.log(err);
        this.setState({ snackbar: true, errorMessage: err[0].message });
      });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <h2>Create new article.</h2>
          <br />
          <TextField
            label="Title"
            fullWidth
            value={this.state.title}
            onChange={this.handleChange('title')}
          />
          <br />
          <TextField
            label="Text"
            fullWidth
            multiline
            rows={10}
            value={this.state.text}
            onChange={this.handleChange('text')}
          />
          <br />
          <Button onClick={this.handleClose}>Cancel</Button>
          <Button onClick={this.handlePost}>Post</Button>
        </div>
        <Snackbar
          open={this.state.snackbar}
          onClose={this.closeSnack}
          message={<span>{this.state.errorMessage}</span>}
          action={[
            <Button
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={this.closeSnack}
            >
              Close
            </Button>,
          ]}
        />
      </React.Fragment>
    );
  }
}

export default BlogForm;
