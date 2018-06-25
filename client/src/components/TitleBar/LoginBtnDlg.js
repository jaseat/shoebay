import React from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import Dialog from "@material-ui/core/Dialog"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogActions from "@material-ui/core/DialogActions"
import { LogInIcon } from "../../style/Icons"

// props types
//login method
type P = {
  props?: any,
  // handleLogIn?: (email: string, password: string) => void,
}

type S = {
  open_dialog: boolean,
  is_btn_active: boolean,
  user_email: string,
  user_password: string,
}

class LoginBtnDlg extends React.Component<P, S> {
  state = {
    open_dialog: false,
    is_btn_active: false,
    user_email: "",
    user_password: "",
  }

  _handleOpenDialog = (): void => {
    this.setState({ open_dialog: true })
  }

  _handleCloseDialog = (): void => {
    this.setState({ open_dialog: false })
  }

  _handleInput = (name: string) => (event: Object) => {
    this.setState({ [name]: event.target.value })
    if (!this.state.is_btn_active) {
      if (this._isCompleted("user_email") && this._isCompleted("user_password"))
        this.setState({ is_btn_active: true })
    }
  }

  _isCompleted = (name: string): boolean => {
    if (this.state[name].length > 0) return true
    return false
  }

  render() {
    return (
      <React.Fragment>
        <Button variant="flat" onClick={this._handleOpenDialog}>
          <LogInIcon color="secondary" />
          Login
        </Button>
        <Dialog
          open={this.state.open_dialog}
          keepMounted
          onClose={this._handleCloseDialog}
        >
          <DialogTitle id="login-dialog">Log In</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="user-email"
              label="Email"
              type="email"
              fullWidth
              value={this.state.user_email}
              onChange={this._handleInput("user_email")}
            />
            <TextField
              margin="dense"
              id="user-password"
              label="Password"
              type="password"
              fullWidth
              value={this.state.user_password}
              onChange={this._handleInput("user_password")}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this._handleCloseDialog}>Cancel</Button>
            {/* props method for log in onClick*/}
            <Button disabled={!this.state.is_btn_active}>Log In</Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}
export default LoginBtnDlg
