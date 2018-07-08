import { createMuiTheme } from '@material-ui/core/styles';
//TODO
const ThemeLight = createMuiTheme({
  palette: {
    type: 'light',
    // background: {
    //   default: '#fff',
    // },
    primary: {
      main: '#4caf50',
      light: '#80e27e',
      dark: '#087f23',
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
        backgroundColor: '#80e27e',
        margin: 2,
      },
    },
    MuiButton: {
      fab: {
        boxShadow: 'none',
      },
    },
  },
});
const ThemeDark = createMuiTheme({
  palette: {
    type: 'dark',
    // background: {
    //   default: '#fff',
    // },
    primary: {
      main: '#4caf50',
      light: '#80e27e',
      dark: '#087f23',
    },
    secondary: {
      main: '#ff8a65',
      light: '#ffbb93',
      dark: '#c75b39',
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
        backgroundColor: '#087f23',
        margin: 2,
      },
    },
    MuiButton: {
      fab: {
        boxShadow: 'none',
      },
    },
  },
});
export { ThemeLight, ThemeDark };
