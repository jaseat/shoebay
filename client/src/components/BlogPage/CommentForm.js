import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import { postComment } from '../../utils/api';
import Snackbar from '@material-ui/core/Snackbar';

class CommentForm extends Component {
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
    if (this.props.close) this.props.close();
  };
  closeSnack = () => {
    this.setState({ snackbar: false });
  };
  handlePost = () => {
    const newComment = {
      title: this.state.title,
      text: this.state.text,
      articleId: this.props.id,
    };
    postComment(newComment)
      .then(a => {
        console.log(a);
        if (this.props.close) this.props.close();
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
          <h2>Create new comment</h2>
          <br />
          <TextField
            label="Title"
            value={this.state.title}
            onChange={this.handleChange('title')}
          />
          <br />
          <TextField
            label="Text"
            multiline
            rows={4}
            value={this.state.text}
            onChange={this.handleChange('text')}
          />
          <br />
          <Button variant="raised" onClick={this.handlePost}>
            Post
          </Button>
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

export default CommentForm;
