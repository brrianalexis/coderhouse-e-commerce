import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLink = ({ children, to }) => {
  return (
    <Link
      style={{
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        textTransform: 'uppercase',
      }}
      to={to}
    >
      {children}
    </Link>
  );
};

StyledLink.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
};

export default StyledLink;
