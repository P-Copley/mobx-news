import { observable, decorate, computed } from 'mobx';

// class Article {
//   article_id = 0;
//   title = '';
//   body = '';
//   votes = 0;
//   created_at = '';
//   author = '';
//   topic = '';
//   comment_count = '0';
// }

export class Articles {
  articles = [];
  get totalVotes() {
    return this.articles.reduce((total, article) => total + article.votes, 0);
  }
}

// export class Article {
//   article_id;
//   title;
//   body;
//   votes;
//   created_at;
//   author;
//   topic;
//   comment_count;
// }

decorate(Articles, {
  articles: observable,
  totalVotes: computed
});

// decorate(Article);

export default new Articles();
