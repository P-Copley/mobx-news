import React from 'react';

const Error = props => {
  console.log(props);
  return (
    <div>
      <p>Oops!</p>
      {props.location && props.location.state && (
        <p>{props.location.state.message}</p>
      )}
    </div>
  );
};

export default Error;
