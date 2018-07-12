import React, { Component } from 'react';

import { fetchQuery, getUserArticles } from '../../utils/api';
import Paragraphs from '../Paragraphs';
import CommentListContainer from './CommentListContainer';
import CommentForm from './CommentForm';

import Waypoint from 'react-waypoint';
import { isFirstDayOfMonth } from 'date-fns';

import UserArticles from './UserArticles';
import infiniteScroll from '../infiniteScroll';

import { withRouter } from 'react-router-dom';

class BlogArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      comments: [],
      hasNext: true,
      cursor: null,
    };
  }
  _getComments = () => {
    window.location.reload();
  };

  _handleWaypointEnter = () => {
    const { id } = this.props.match.params;
    const query = `
    {
      node(id: "article:${id}"){
        ...on Article{
          comments(after:"${this.state.cursor}"){
            pageInfo{
              hasNextPage
              endCursor
            }
            edges{
              cursor
              node{
                author{
                  id
                  username
                }
                title
                text
                createdAt
              }
            }
          }
        }
      }
    }
    `;
    if (this.state.hasNext)
      fetchQuery(query)
        .then(res => {
          return res.data.node;
        })
        .then(data => {
          const comments = data.comments.edges.map(c => {
            return c.node;
          });
          this.setState({
            comments: [...this.state.comments, ...comments],
            cursor: data.comments.pageInfo.endCursor,
            hasNext: data.comments.pageInfo.hasNextPage,
          });
        })
        .catch(err => {
          console.log(err);
        });
  };
  componentDidUpdate(prevProps) {
    if (prevProps.match.params !== this.props.match.params) this._setArticle();
  }
  componentDidMount() {
    this._setArticle();
  }
  _setArticle() {
    const { id } = this.props.match.params;
    const query = `
    {
      node(id: "article:${id}"){
        ...on Article{
          author{
            id
            username
          }
          title
          text
          comments{
            pageInfo{
              hasNextPage
              endCursor
            }
            edges{
              cursor
              node{
                author{
                  id
                  username
                }
                title
                text
                createdAt
              }
            }
          }
        }
      }
    }
    `;
    fetchQuery(query)
      .then(res => {
        return res.data.node;
      })
      .then(data => {
        const comments = data.comments.edges.map(c => {
          return c.node;
        });
        const article = {
          author: data.author,
          title: data.title,
          text: data.text,
        };
        this.setState({
          article,
          comments,
          cursor: data.comments.pageInfo.endCursor,
          hasNext: data.comments.pageInfo.hasNextPage,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { article, comments } = this.state;
    const { id } = this.props.match.params;

    if (article) {
      const getOtherArticles = (first, after) => {
        return getUserArticles(article.author.id, first, after);
      };

      const ArticleInfinite = infiniteScroll(UserArticles, getOtherArticles);
      return (
        <div style={{ margin: 12 }}>
          <h1>{article.title}</h1>
          <h4>By {article.author.username}</h4>
          <div className="article-text">
            <Paragraphs paragraphs={article.text} />
          </div>
          <div style={{ height: 256, overflow: 'auto' }}>
            <ArticleInfinite id={id} />
          </div>
          <CommentForm close={this._getComments} id={id} />
          <CommentListContainer comments={comments} id={id} />
          <Waypoint key={this.state.cursor} onEnter={this._handleWaypointEnter}>
            {this.state.hasNext ? <h3>Loading...</h3> : <h3>No more</h3>}
          </Waypoint>
        </div>
      );
    } else return null;
  }
}

export default withRouter(BlogArticlePage);
