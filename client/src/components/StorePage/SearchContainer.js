import * as React from 'react';
import UploadImage from './UploadImage';
import { Button, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

type P = {
  classes: Object,
  children: React.ReactNode,
};

const style = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    // padding: theme.spacing.unit,
    backgroundColor: theme.palette.background.default,
    width: 'auto',
  },
});
class SearchContainer extends React.Component<P> {
  render() {
    return <div className={this.props.classes.root}>{this.props.children}</div>;
  }
}

export default withStyles(style)(SearchContainer);
