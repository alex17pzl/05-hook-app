import PropTypes from 'prop-types';

export const Quote = ({ name, url }) => {
  return (
    <blockquote className="blockquote text-end">
      <p className="mb-1">{name}</p>
      <footer className="blockquote-footer">{url}</footer>
    </blockquote>
  );
};

Quote.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
