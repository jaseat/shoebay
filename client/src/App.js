import React, { Component } from 'react';
//theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './style/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
//custom
import TitleBar from './components/TitleBar';
import StorePage from './components/StorePage/StorePage';

class App extends Component<{}> {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <TitleBar />
        <StorePage />
      </MuiThemeProvider>
    );
  }
}

export default App;
