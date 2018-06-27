import React, { Component } from 'react';
//theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './style/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
//custom
import TitleBar from './components/TitleBar';
import SideDrawer from './components/SideDrawer';
import FilterBar from './components/FilterBar';

class App extends Component<{}> {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <TitleBar />
        <FilterBar />
        <SideDrawer />
      </MuiThemeProvider>
    );
  }
}

export default App;
