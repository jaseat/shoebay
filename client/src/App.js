import React, { Component } from 'react';
//theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeLight, ThemeDark } from './style/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
//custom
import TitleBar from './components/TitleBar';
import StorePage from './components/StorePage';

import { connect } from 'react-redux';

type P = {
  darkTheme: boolean,
};

class App extends Component<P> {
  render() {
    return (
      <MuiThemeProvider theme={this.props.darkTheme ? ThemeDark : ThemeLight}>
        <CssBaseline />
        <TitleBar />
        <StorePage />
      </MuiThemeProvider>
    );
  }
}

export default connect(state => ({ darkTheme: state.theme.darkTheme }))(App);
