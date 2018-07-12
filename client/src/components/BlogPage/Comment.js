import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Paragraphs from '../Paragraphs';

const Comment = props => (
  <Paper style={{ padding: 4, marginBottom: 16 }}>
    <Typography component="h1">
      {props.title} by {props.author.username} on{' '}
      {new Date(props.createdAt).toLocaleString()}
    </Typography>
    <Typography component="div">
      <Paragraphs paragraphs={props.text} />
    </Typography>
  </Paper>
);

export default Comment;
