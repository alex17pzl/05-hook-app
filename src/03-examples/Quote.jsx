import PropTypes from 'prop-types';
import { useLayoutEffect, useRef, useState } from 'react';

export const Quote = ({ name, url }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect();
    setBoxSize({ height, width });
  }, [name]);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: 'flex' }}>
        <p ref={pRef} className="mb-1">
          {name}
        </p>
        <footer className="blockquote-footer">{url}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
