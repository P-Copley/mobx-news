import React, { Component } from 'react';
import { getArticle } from '../utils/api';

class ArticlePage extends Component {
  state = {
    article: {}
  };
  render() {
    const {
      article: { title, body }
    } = this.state;
    return (
      <div>
        {this.props.location.state &&
          this.props.location.state.postSuccessful && (
            <p>Article posted successfully!</p>
          )}
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    getArticle(article_id).then(article => {
      this.setState({ article });
    });
  }
}

export default ArticlePage;
