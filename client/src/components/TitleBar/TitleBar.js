import React from 'react';
//material-ui
import { AppBar, Button, Grid, Typography, Hidden } from '@material-ui/core';
import ToolBar from '@material-ui/core/Toolbar';
//custom components
import LoginBtnDlg from './LoginBtnDlg';
import SignUpBtnDlg from './SignUpBtnDlg';
import UserMenu from './UserMenu';
import PhoneMenu from './PhoneMenu';
//icons
import PureIcon from '../../style/Icons';

import { Link } from 'react-router-dom';

type Props = {
  userId: null | string,
};

const TitleBar = (props: Props) => {
  return (
    <AppBar position="sticky" color="primary">
      <ToolBar>
        <Grid container alignItems="center">
          <Grid item md={6} xs={11} />

          <Hidden smDown implementation="js">
            <Grid item md={6} xs={11}>
              <Typography align="right" variant="button">
                <Button
                  variant="flat"
                  component={props => {
                    return <Link to="/" {...props} />;
                  }}
                >
                  <PureIcon iconType="Store" />Store
                </Button>
                <Button
                  variant="flat"
                  component={props => {
                    return <Link to="/blog" {...props} />;
                  }}
                >
                  <PureIcon iconType="Blog" />Blog
                </Button>
                {props.userId !== null ? (
                  <UserMenu />
                ) : (
                  <React.Fragment>
                    <LoginBtnDlg />
                    <SignUpBtnDlg />
                  </React.Fragment>
                )}
              </Typography>
            </Grid>
          </Hidden>

          <Hidden mdUp implementation="js">
            <Grid item xs={1}>
              <PhoneMenu />
            </Grid>
          </Hidden>
        </Grid>
      </ToolBar>
    </AppBar>
  );
};
export default TitleBar;
