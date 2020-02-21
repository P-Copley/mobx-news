import { types } from 'mobx-state-tree';

const Article = types
  .model('Article', {
    title: types.string,
    votes: types.number,
    article_id: types.number,
    created_at: types.string,
    author: types.string,
    topic: types.string,
    comment_count: types.string
  })
  .actions(self => ({
    vote(increment) {
      self.votes += increment;
    }
  }))
  .views(self => ({
    getBodyPreview() {
      return `${self.body.slice(0, 100)}...`;
    },
    getRelativeCreatedAt() {
      // return created_at from now
      // e.g. 2 days ago
    }
  }));

export default Article;
