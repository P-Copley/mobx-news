import React from 'react';

const Stats = ({ articles }) => {
  console.log(articles);
  const totalVotes = articles.reduce(
    (total, article) => total + article.votes,
    0
  );

  const contributorCount = 3;
  return (
    <section>
      <h3>Stats</h3>
      <p>Total Votes: {totalVotes}</p>
    </section>
  );
};

export default Stats;
