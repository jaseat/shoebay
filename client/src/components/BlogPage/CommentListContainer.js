import React, { Component } from 'react';
import Comment from './Comment';

class CommentListContainer extends Component {
  render() {
    return (
      <div>
        <h2>Comments</h2>
        {this.props.comments.map(a => (
          <Comment title={a.title} text={a.text} author={a.author} />
        ))}
      </div>
    );
  }
}

export default CommentListContainer;
