import React from 'react';
import articlesStore from '../stores/articles';
import { useObserver } from 'mobx-react';

const Stats = () => {
  return useObserver(() => (
    <section>
      <h3>Stats</h3>
      <p>Total Votes: {articlesStore.getTotalVotes()}</p>
    </section>
  ));
};

export default Stats;
