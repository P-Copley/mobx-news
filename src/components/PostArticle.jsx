import React, { Component } from 'react';
import { postArticle } from '../utils/api';
import { navigate } from '@reach/router';

class PostArticle extends Component {
  state = {
    title: '',
    body: '',
    author: 'weegembump',
    topic: 'coding'
  };
  render() {
    const { title, body } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={this.handleChange}
        />
        <label htmlFor="body">Body</label>
        <input
          type="text"
          id="body"
          value={body}
          onChange={this.handleChange}
        />
        <button type="submit">Post</button>
      </form>
    );
  }
  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const article = this.state;
    postArticle(article)
      .then(({ article_id }) => {
        navigate(`/articles/${article_id}`, {
          state: {
            postSuccessful: true
          }
        });
      })
      .catch(err => {
        navigate('/error', {
          state: {
            code: err.status,
            message: err.msg
          }
        });
      });
  };
}

export default PostArticle;
