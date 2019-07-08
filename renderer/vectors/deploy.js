// Packages
import React from 'react';
import PropTypes from 'prop-types';

const Deploy = ({ darkBg }) => (
  <svg
    width="17"
    height="16"
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="Page-1"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="square"
    >
      <g
        id="Plus"
        transform="translate(1.000000, 0.000000)"
        stroke={darkBg ? '#999' : '#666'}
      >
        <path d="M5.5,0.5 L5.5,11.5" id="Line" />
        <path
          d="M5.5,0.5 L5.5,11.5"
          id="Line-Copy"
          transform="translate(5.500000, 6.000000) rotate(-90.000000) translate(-5.500000, -6.000000) "
        />
      </g>
    </g>
  </svg>
);

Deploy.propTypes = {
  darkBg: PropTypes.bool
};

export default Deploy;
