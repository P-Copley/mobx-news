import React from 'react';

const Vote = ({ article, votes, vote }) => {
  return (
    <div>
      <button onClick={() => vote(article, 1)}>+</button>
      <p>{votes}</p>
      <button onClick={() => vote(article, -1)}>-</button>
    </div>
  );
};

export default Vote;
