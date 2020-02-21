import React from 'react';
import { observer } from 'mobx-react';
import * as api from '../utils/api';

// Observe changes to the articlesStore using a functional component
const Vote = observer(({ article }) => {
  const vote = increment => {
    api.vote(article.article_id, increment);
    article.votes += increment;
  };
  return (
    <div>
      <button onClick={() => vote(1)}>+</button>
      <p>{article.votes}</p>
      <button onClick={() => vote(-1)}>-</button>
    </div>
  );
});

export default Vote;
