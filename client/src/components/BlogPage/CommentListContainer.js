import React, { Component } from 'react';
import Comment from './Comment';

class CommentListContainer extends Component {
  render() {
    return (
      <div>
        <h2>Comments</h2>
        {this.props.comments.map((a, idx) => (
          <Comment
            key={idx}
            title={a.title}
            text={a.text}
            author={a.author}
            createdAt={a.createdAt}
          />
        ))}
      </div>
    );
  }
}

export default CommentListContainer;
