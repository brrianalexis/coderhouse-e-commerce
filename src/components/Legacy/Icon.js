import React from 'react';
import PropTypes from 'prop-types';

export const Icon = ({ children, text }) => {
  return (
    <>
      {children}
      {text}
    </>
  );
};

Icon.propTypes = {
  children: PropTypes.element,
  text: PropTypes.string,
};
