import PropTypes from 'prop-types';
import React from 'react';

// eslint-disable-next-line react/display-name
export const ShowIncrement = React.memo(({ increment }) => {
  console.log('Me volví a generar :(');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(2);
      }}
    >
      Incrementar
    </button>
  );
});

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired,
};
