import React from 'react';
//material-ui
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
//custom components
import LoginBtnDlg from './LoginBtnDlg';
import SignUpBtnDlg from './SignUpBtnDlg';
import UserMenu from './UserMenu';
//icons
import PureIcon from '../../style/Icons';

type Props = {
  userId: ?string,
};

const TitleBar = (props: Props) => {
  return (
    <AppBar position="static" color="primary">
      <ToolBar>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <Typography variant="display1" color="secondary">
              SB
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography align="right" variant="button">
              <Button variant="flat">
                <PureIcon iconType="Store" />Shop
              </Button>
              <Button variant="flat">
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
        </Grid>
      </ToolBar>
    </AppBar>
  );
};
export default TitleBar;
