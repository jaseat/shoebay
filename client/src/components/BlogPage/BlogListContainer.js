import React, { Component } from 'react';
import BlogArticle from './BlogArticle';

import { getRecentArticles } from '../../utils/api';

import Waypoint from 'react-waypoint';

class BlogListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      hasNext: true,
      cursor: null,
      loading: true,
    };
  }
  _handleWaypointEnter = () => {
    if (this.state.hasNext)
      getRecentArticles(null, this.state.cursor).then(res => {
        const articles = res.edges.map(e => e.node);
        this.setState({
          articles: [...this.state.articles, ...articles],
          hasNext: res.pageInfo.hasNextPage,
          cursor: res.pageInfo.endCursor,
          loading: false,
        });
      });
  };
  componentDidMount() {
    getRecentArticles()
      .then(res => {
        const articles = res.edges.map(e => {
          return e.node;
        });
        this.setState({
          articles,
          hasNext: res.pageInfo.hasNextPage,
          cursor: res.pageInfo.endCursor,
          loading: false,
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        {this.state.articles.map((a, i) => (
          <BlogArticle
            key={i}
            style={{ width: '95%', margin: '24px auto' }}
            id={a.id.split(':')[1]}
            title={a.title}
            text={a.shortText}
            author={a.author}
          />
        ))}
        {!this.state.loading && (
          <Waypoint key={this.state.cursor} onEnter={this._handleWaypointEnter}>
            {this.state.hasNext ? <h3>Loading...</h3> : <h3>No more</h3>}
          </Waypoint>
        )}
      </div>
    );
  }
}

export default BlogListContainer;
