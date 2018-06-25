import React from "react"
//material-ui
import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
//theme - move to root component later
import { MuiThemeProvider } from "@material-ui/core/styles"
import Theme from "../../style/Theme"
//custom components
import LoginBtnDlg from "./LoginBtnDlg"
import SignUpBtnDlg from "./SignUpBtnDlg"
import UserMenu from "./UserMenu"

type Props = {
  isAuth: boolean,
}

const TitleBar = (props: Props) => {
  return (
    <MuiThemeProvider theme={Theme}>
      <AppBar position="static" color="primary">
        <ToolBar>
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Typography variant="display1">ShoeBay.com</Typography>
            </Grid>

            <Grid item xs={6}>
              <Typography align="right">
                <Button variant="flat">Shop</Button>
                <Button variant="flat">Blog</Button>

                {props.isAuth ? (
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
    </MuiThemeProvider>
  )
}
export default TitleBar
