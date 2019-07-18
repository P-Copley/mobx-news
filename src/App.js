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
    topics: []
  };
  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Heading />
        <Nav topics={topics} />
        <Router className="main">
          <Articles path="/" />
          <Articles path="/topics/:topic" />
          <ArticlePage path="/articles/:article_id" />
          <PostArticle path="/newarticle" />
          <Error path="/error" />
        </Router>
        <Footer />
      </div>
    );
  }

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
