import React, { Component } from 'react';
//theme
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeLight, ThemeDark } from './style/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';
//custom
import TitleBar from './components/TitleBar';
import StorePage from './components/StorePage';
import BlogPage from './components/BlogPage';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';

//route
import { Switch, Route } from 'react-router-dom';

//redux
import { userLogin } from './actions/user';

//api
import * as API from './utils/api';

type P = {
  darkTheme: boolean,
};

class App extends Component<P> {
  componentDidMount() {
    const query = `{viewer{id}}`;
    API.fetchQuery(query)
      .then(res => {
        this.props.userLogin(res.data.viewer.id);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <MuiThemeProvider theme={this.props.darkTheme ? ThemeDark : ThemeLight}>
        <CssBaseline />
        <TitleBar />
        <Switch>
          <Route exact path="/" component={StorePage} />
          <Route path="/blog" component={BlogPage} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(
  connect(
    state => ({ darkTheme: state.theme.darkTheme }),
    { userLogin }
  )(App)
);
