import { observable, decorate, computed } from 'mobx';

// create our store to hold articles
export class Articles {
  articles = [];
  get totalVotes() {
    return this.articles.reduce((total, article) => total + article.votes, 0);
  }
}

// make properties in our store observable
decorate(Articles, {
  articles: observable,
  totalVotes: computed
});

const articlesStore = new Articles();

export default articlesStore;
