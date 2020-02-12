import React, { Component } from 'react';
import { Router } from '@reach/router';
import Heading from './components/Heading';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Articles from './components/Articles';
import ArticlePage from './components/ArticlePage';
import PostArticle from './components/PostArticle';
import Error from './components/Error';
import './css/App.css';
import * as api from './utils/api';

class App extends Component {
  state = {
    topics: [],
    user: null
  };
  render() {
    const { topics, user } = this.state;
    return (
      <div className="App">
        <Heading />
        <Nav topics={topics} />
        <Router className="main">
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <ArticlePage path="/articles/:article_id" />
          <PostArticle path="/newarticle" user={user} />
          <Error default path="/error" />
        </Router>
        <Footer />
      </div>
    );
  }

  setUser = user => {
    this.setState({
      user
    });
  };

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => {
      this.setState({
        topics
      });
    });
  };
}

export default App;
