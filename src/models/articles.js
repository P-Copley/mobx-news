import { types } from 'mobx-state-tree';
import Article from './article';

/*
An example of how a strongly typed store for articles can be implemented using mobx-state-tree
Not used in the app but here as an example that would work.
All updates to the store are performed through actions. (This can be turned off to allow any mutations)
Derivations can be calculated and tested using views.
*/

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
