import { createMuiTheme } from '@material-ui/core/styles';
//TODO
const Theme = createMuiTheme({
  palette: {
    type: 'light',
    // background: {
    //   default: '#fff',
    // },
    primary: {
      main: '#7986cb',
      light: '#aab6fe',
      dark: '#49599a',
    },
    secondary: {
      main: '#ffe082',
      light: '#ffffb3',
      dark: '#caae53',
    },
  },
  typography: {
    fontSize: 16,
    fontFamily: 'Marcellus SC, serif',
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'rgb(255 ,255,255)',
      },
    },
    MuiChip: {
      root: {
        backgroundColor: '#7986cb',
        margin: 3,
      },
    },
  },
});
export default Theme;
