import { types } from 'mobx-state-tree';
import Article from './article';

const Articles = types
  .model('Articles', {
    articles: types.array(Article)
  })
  .actions(self => ({
    setArticles(newArticles) {
      self.articles = newArticles;
    }
  }))
  .views(self => ({
    getTotalVotes() {
      return self.articles.reduce((total, article) => total + article.votes, 0);
    }
  }));

export default Articles;
