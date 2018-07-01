import React from 'react';
//material-ui
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
//custom components
import LoginBtnDlg from './LoginBtnDlg';
import SignUpBtnDlg from './SignUpBtnDlg';
import UserMenu from './UserMenu';
import PhoneMenu from './PhoneMenu';
//icons
import PureIcon from '../../style/Icons';
import LogoSvg from '../../style/LogoSvg';

type Props = {
  userId: ?string,
};

const TitleBar = (props: Props) => {
  return (
    <AppBar position="sticky" color="primary">
      <ToolBar>
        <Grid container alignItems="center">
          <Grid item md={6} xs={11}>
            <LogoSvg />
          </Grid>

          <Hidden smDown implementation="js">
            <Grid item md={6} xs={11}>
              <Typography align="right" variant="button">
                <Button variant="flat">
                  <PureIcon iconType="Store" />Store
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
