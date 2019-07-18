import React from 'react';
import { Link } from '@reach/router';
import '../css/Nav.css';

const Nav = ({ topics }) => {
  return (
    <nav className="nav Nav">
      <Link to="/">Home</Link>
      {topics.map(({ slug }) => (
        <Link to={`/topics/${slug}`} key={slug}>
          {slug}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
