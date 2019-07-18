import React from 'react';
import { Link } from '@reach/router';
import '../css/ArticleCard.css';
import Vote from './Vote';

const ArticleCard = ({ article: { title, author, article_id, votes } }) => {
  return (
    <li className="ArticleCard">
      <Vote votes={votes} id={article_id} section="articles" />
      <div>
        <Link to={`/articles/${article_id}`}>
          <h3>{title}</h3>
        </Link>
        <p className="ArticleCard-author">{author}</p>
      </div>
    </li>
  );
};

export default ArticleCard;
