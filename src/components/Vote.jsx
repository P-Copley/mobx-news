import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../utils/api';

class Vote extends Component {
  state = {
    voteChange: 0,
    err: null
  };
  render() {
    const { votes, vote, article } = this.props;
    const { voteChange, err } = this.state;
    return (
      <div>
        {err ? <p>Oops, something went wrong</p> : null}
        <button onClick={() => vote(article, 1)} disabled={voteChange === 1}>
          +
        </button>
        <p>{votes + voteChange}</p>
        <button onClick={() => vote(article, -1)} disabled={voteChange === -1}>
          -
        </button>
      </div>
    );
  }

  vote = increment => {
    const { id, section } = this.props;
    api.vote(id, increment, section).catch(err => {
      this.setState(state => ({
        err,
        voteChange: state.voteChange - increment
      }));
    });
    this.setState(state => ({
      voteChange: state.voteChange + increment
    }));
  };
}

Vote.propTypes = {
  votes: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  section: PropTypes.string.isRequired
};

export default Vote;
