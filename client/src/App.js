import React, { Component } from 'react';
//theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './style/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
//custom
import TitleBar from './components/TitleBar';
import StorePage from './components/StorePage/StorePage';
import DisplayArea from './components/DisplayArea/DisplayArea';
import { InfiniteLoader, List } from 'react-virtualized';
import loremIpsum from 'lorem-ipsum';
import rowRenderer from './components/TestArray/TestArray';

class App extends Component<{}> {
  render() {
    return (
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <TitleBar />
        <StorePage />
        <DisplayArea />
      </MuiThemeProvider>
    );
  }
}

export default App;
