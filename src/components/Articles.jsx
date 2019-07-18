import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import * as api from '../utils/api';
import '../css/Articles.css';

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    const { topic } = this.props;
    const { articles } = this.state;
    return (
      <main>
        <h2>{topic ? `Articles on ${topic}` : 'All articles'}</h2>
        <ul>
          {articles.map(article => (
            <ArticleCard article={article} key={article.article_id} />
          ))}
        </ul>
        <button onClick={this.nextPage}>More pls!</button>
      </main>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const newTopic = this.props.topic !== prevProps.topic;
    if (newTopic) this.fetchArticles();
  }

  fetchArticles = () => {
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
