import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Paragraphs from '../Paragraphs';

import { Link } from 'react-router-dom';

const BlogArticle = props => {
  const { id, title, author, text, ...others } = props;
  const style = { padding: 12, ...others.style };
  return (
    <Paper {...others} style={style}>
      <Typography variant="headline" component="h3">
        <Link to={`/blog/${id}`}> {title} </Link> by {author.username}
      </Typography>
      <Typography component="div">
        <Paragraphs paragraphs={text} />
      </Typography>
    </Paper>
  );
};

export default BlogArticle;
