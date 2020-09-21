import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StyledLink = ({ children, to, style, className }) => {
  return (
    <Link
      style={{
        ...style,
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
      }}
      to={to}
      className={className}
    >
      {children}
    </Link>
  );
};

StyledLink.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default StyledLink;
