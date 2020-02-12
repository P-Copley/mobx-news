import React from 'react';
import '../css/Heading.css';

const Heading = props => {
  return (
    <header className="header Heading">
      <h1>
        <span className="nc-red">{'<'}</span>
        <span> NC News </span>
        <span className="nc-red">{'/>'}</span>
      </h1>
    </header>
  );
};

export default Heading;
