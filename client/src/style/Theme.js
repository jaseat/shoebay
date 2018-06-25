import { createMuiTheme } from "@material-ui/core/styles"
//TODO
const Theme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#fff",
    },
    primary: {
      main: "#00acc1",
      light: "#5ddef4",
      dark: "#007c91",
    },
    secondary: {
      main: "#ffb300",
      light: "#ffe54c",
      dark: "#c68400",
    },
  },
  typography: {
    fontSize: 16,
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: "rgb(200 ,200,200)",
      },
    },
  },
})
export default Theme
