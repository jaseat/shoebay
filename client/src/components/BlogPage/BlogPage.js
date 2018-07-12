import React, { Component } from 'react';

import BlogList from './BlogList';
import BlogArticlePage from './BlogArticlePage';

//route
import { Switch, Route } from 'react-router-dom';

class BlogPage extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/blog" component={BlogList} />
        <Route path="/blog/:id" component={BlogArticlePage} />
      </Switch>
    );
  }
}

export default BlogPage;
