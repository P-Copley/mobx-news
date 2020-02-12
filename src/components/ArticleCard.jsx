import React from 'react';
import { Link } from '@reach/router';
import '../css/ArticleCard.css';
import Vote from './Vote';
import { useObserver } from 'mobx-react';

const ArticleCard = ({ article, vote }) => {
  return useObserver(() => (
    <li className="ArticleCard">
      <Vote
        votes={article.votes}
        id={article.article_id}
        section="articles"
        vote={vote}
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
