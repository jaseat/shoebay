import React, { Component } from "react"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import { SignUpIcon } from "../../style/Icons"

type P = {
  //
}
type S = {
  open_dialog: boolean,
  user_name: string,
  user_email: string,
  user_password: string,
  user_confirm_pass: string,
  is_submit_dis: boolean,
}

class SignUpBtnDlg extends Component<P, S> {
  state = {
    open_dialog: false,
    user_name: "",
    user_email: "",
    user_password: "",
    user_confirm_pass: "",
    is_submit_dis: true,
  }
  render() {
    return (
      <Button variant="flat">
        <SignUpIcon color="secondary" />
        SignUp
      </Button>
    )
  }
}
export default SignUpBtnDlg
