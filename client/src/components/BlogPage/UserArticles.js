import React from 'react';

import * as API from '../../utils/api';
import { isFirstDayOfMonth } from 'date-fns';

import { Link } from 'react-router-dom';

const UserArticles = props => {
  const articles = props.res.edges ? props.res.edges.map(r => r.node) : [];
  return (
    <div>
      <h2>This user's other articles:</h2>
      {articles.map(
        (r, idx) =>
          props.id !== r.id.split(':')[1] && (
            <div key={idx}>
              <Link to={`/blog/${r.id.split(':')[1]}`}>{r.title} </Link>
            </div>
          )
      )}
    </div>
  );
};

export default UserArticles;
