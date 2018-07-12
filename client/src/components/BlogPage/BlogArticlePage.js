import React, { Component } from 'react';

import { fetchQuery } from '../../utils/api';
import Paragraphs from '../Paragraphs';
import CommentListContainer from './CommentListContainer';
import CommentForm from './CommentForm';

class BlogArticlePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: null,
      comments: [],
    };
  }
  componentDidMount() {
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
              }
            }
          }
        }
      }
    }
    `;
    fetchQuery(query)
      .then(res => res.data.node)
      .then(data => {
        const comments = data.comments.edges.map(c => {
          return c.node;
        });
        const article = {
          author: data.author,
          title: data.title,
          text: data.text,
        };
        this.setState({ article, comments });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { article, comments } = this.state;
    const { id } = this.props.match.params;

    if (article)
      return (
        <React.Fragment>
          <h1>{article.title}</h1>
          <h4>By {article.author.username}</h4>
          <div className="article-text">
            <Paragraphs paragraphs={article.text} />
          </div>
          <CommentListContainer comments={comments} id={id} />
          <CommentForm id={id} />
        </React.Fragment>
      );
    else return null;
  }
}

export default BlogArticlePage;
