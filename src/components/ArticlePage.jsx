import React, { Component } from 'react';
import { getArticle } from '../utils/api';
import { navigate } from '@reach/router';

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
  // componentDidMount() {
  //   const { article_id } = this.props;
  //   getArticle(article_id)
  //     .then(article => {
  //       this.setState({ article });
  //     })
  //     .catch(() => {
  //       navigate('/error', {
  //         replace: true,
  //         state: {
  //           message: 'Article not found'
  //         }
  //       });
  //     });
  // }

  componentDidMount = async () => {
    const { article_id } = this.props;
    try {
      const article = await getArticle(article_id);
      this.setState({ article });
    } catch (err) {
      navigate('/error', {
        state: {
          message: err.msg
        }
      });
    }
  };
}

export default ArticlePage;
