import React, { Component } from 'react';

import { getRecentArticles } from '../utils/api';

import Waypoint from 'react-waypoint';

export function infiniteScroll(WrappedComponent, getData) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        res: [],
        hasNext: true,
        cursor: null,
        loading: true,
      };
    }
    _handleWaypointEnter = () => {
      if (this.state.hasNext)
        getData(null, this.state.cursor).then(res => {
          res.edges = [...this.state.res.edges, ...res.edges];
          this.setState({
            res,
            hasNext: res.pageInfo.hasNextPage,
            cursor: res.pageInfo.endCursor,
            loading: false,
          });
        });
    };
    componentDidMount() {
      getData()
        .then(res => {
          this.setState({
            res,
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
          <WrappedComponent res={this.state.res} {...this.props} />
          {!this.state.loading && (
            <Waypoint
              key={this.state.cursor}
              onEnter={this._handleWaypointEnter}
            >
              {this.state.hasNext ? <h3>Loading...</h3> : <h3>No more</h3>}
            </Waypoint>
          )}
        </div>
      );
    }
  };
}

export default infiniteScroll;
