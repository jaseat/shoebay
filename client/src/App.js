import React, { Component } from 'react';
//theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import Theme from './style/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
//custom
import TitleBar from './components/TitleBar';
import StorePage from './components/StorePage/StorePage';

import { fetchQuery, logIn } from './utils/api';

class App extends Component<{}> {
  componentDidMount() {
    const query = `query NodeQuery($input: NodeInput!){
      node(input:$input){
        ...on User {
          id
          firstName
        }
      }
    }`;
    const variables = {
      input: { id: 'user:1' },
    };
    fetchQuery(query, variables).then(data => console.log(data));
    const credentials = {
      email: 'test@test.com',
      password: 'test',
    };
    logIn(credentials).then(data => console.log(data));
  }
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
