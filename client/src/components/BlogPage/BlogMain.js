import React, { Component } from 'react';
import BlogListContainer from './BlogListContainer';
import BlogForm from './BlogForm';

import { Button, Dialog, DialogContent } from '@material-ui/core';

class BlogMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogDialogOpen: false,
    };
  }
  handleOpen = () => {
    this.setState({ blogDialogOpen: true });
  };
  handleClose = submit => {
    this.setState({ blogDialogOpen: false });
    if (submit) window.location.reload();
  };
  render() {
    return (
      <React.Fragment>
        <Button variant="raised" onClick={this.handleOpen}>
          Create Article
        </Button>
        <Dialog open={this.state.blogDialogOpen} fullWidth>
          <DialogContent>
            <BlogForm close={this.handleClose} />
          </DialogContent>
        </Dialog>
        <BlogListContainer />
      </React.Fragment>
    );
  }
}

export default BlogMain;