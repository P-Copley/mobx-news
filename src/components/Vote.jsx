import React from 'react';
import * as api from '../utils/api';

const Vote = ({ article, votes }) => {
  const vote = increment => {
    api.vote(article.article_id, increment);
    article.vote(increment);
  };
  return (
    <div>
      <button onClick={() => vote(1)}>+</button>
      <p>{votes}</p>
      <button onClick={() => vote(-1)}>-</button>
    </div>
  );
};

export default Vote;
