import React, { Component } from 'react';
import { Observer } from 'mobx-react';
import ArticleCard from './ArticleCard';
import Stats from './Stats';
import * as api from '../utils/api';
import '../css/Articles.css';
import articlesStore from '../stores/articles';

class Articles extends Component {
  state = {
    articles: [],
    p: 1
  };
  render() {
    const { topic } = this.props;
    return (
      // Observe changes to the articlesStore using a Higher order component
      <Observer>
        {() => (
          <main>
            <h2>{topic ? `Articles on ${topic}` : 'All articles'}</h2>
            <Stats />
            <ul>
              {articlesStore.articles.map(article => (
                <ArticleCard
                  article={article}
                  key={article.article_id}
                  vote={this.vote}
                />
              ))}
            </ul>
            <button onClick={this.nextPage}>More pls</button>
          </main>
        )}
      </Observer>
    );
  }

  vote = (articleToUpdate, increment) => {
    api.vote(articleToUpdate.article_id, increment, 'articles');
    this.setState(state => ({
      articles: state.articles.map(article => {
        if (article === articleToUpdate) {
          return {
            ...articleToUpdate,
            votes: article.votes + increment
          };
        }
        return article;
      })
    }));
  };

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
      // this.setState({ articles, p: 1 });
      articlesStore.articles = articles;
    });
  };
}

export default Articles;
