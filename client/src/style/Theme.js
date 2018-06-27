import { createMuiTheme } from '@material-ui/core/styles';
//TODO
const Theme = createMuiTheme({
  palette: {
    type: 'light',
    background: {
      default: '#fff',
    },
    primary: {
      main: '#40c4ff',
      light: '#82f7ff',
      dark: '#0094cc',
    },
    secondary: {
      main: '#bf360c',
      light: '#f9683a',
      dark: '#870000',
    },
  },
  typography: {
    fontSize: 16,
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        backgroundColor: 'rgb(255 ,255,255)',
      },
    },
  },
});
export default Theme;
