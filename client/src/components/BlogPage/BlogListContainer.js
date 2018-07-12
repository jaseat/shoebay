import React, { Component } from 'react';
import BlogArticle from './BlogArticle';

import { getRecentArticles } from '../../utils/api';

class BlogListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }
  componentDidMount() {
    getRecentArticles()
      .then(res => {
        const articles = res.edges.map(e => {
          return e.node;
        });
        this.setState({ articles });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.articles.map(a => (
          <BlogArticle
            id={a.id.split(':')[1]}
            title={a.title}
            text={a.shortText}
            author={a.author}
          />
        ))}
      </div>
    );
  }
}

export default BlogListContainer;
