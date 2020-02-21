import React from 'react';
import { Link } from '@reach/router';
import { useObserver } from 'mobx-react';
import Vote from './Vote';
import '../css/ArticleCard.css';

const ArticleCard = ({ article, vote }) => {
  // Observe changes to the articlesStore using a hook
  return useObserver(() => (
    <li className="ArticleCard">
      <Vote
        votes={article.votes}
        id={article.article_id}
        section="articles"
        article={article}
      />
      <div>
        <Link to={`/articles/${article.article_id}`}>
          <h3>{article.title}</h3>
        </Link>
        <p className="ArticleCard-author">{article.author}</p>
      </div>
    </li>
  ));
};

export default ArticleCard;
