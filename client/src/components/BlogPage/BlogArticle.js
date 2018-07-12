import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Paragraphs from '../Paragraphs';

const BlogArticle = props => (
  <Paper>
    <Typography variant="headline" component="h3">
      {props.title} by {props.author.username}
    </Typography>
    <Typography component="div">
      <Paragraphs paragraphs={props.text} />
    </Typography>
  </Paper>
);

export default BlogArticle;
