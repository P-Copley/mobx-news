import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import * as api from '../utils/api';
import '../css/Articles.css';

class Articles extends Component {
  state = {
    articles: [],
    p: 1
  };
  render() {
    const { topic } = this.props;
    const { articles } = this.state;
    console.log(articles.length);
    return (
      <main>
        <h2>{topic ? `Articles on ${topic}` : 'All articles'}</h2>
        <ul>
          {articles.map(article => (
            <ArticleCard article={article} key={article.article_id} />
          ))}
        </ul>
        <button onClick={this.nextPage}>More pls</button>
      </main>
    );
  }
  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    const newTopic = this.props.topic !== prevProps.topic;
    const newPage = this.state.p !== prevState.p && this.state.p !== 1;
    if (newTopic) this.fetchArticles();
    if (newPage) this.addMoreArticles();
  }

  addMoreArticles = () => {
    const { topic } = this.props;
    const { p } = this.state;
    api.getArticles(topic, p).then(articles => {
      this.setState(state => ({
        articles: [...state.articles, ...articles]
      }));
    });
  };

  nextPage = () => {
    this.setState(state => ({
      p: state.p + 1
    }));
  };

  fetchArticles = () => {
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      this.setState({ articles, p: 1 });
    });
  };
}

export default Articles;
