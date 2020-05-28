import React from 'react';
import PropTypes from 'prop-types';
import Graph from './styles';

function RatingBar({ rating }) {
  function rateColor(val) {
    if (val <= 40) {
      return 'low';
    }

    if (val <= 70) {
      return 'medium';
    }

    return 'high';
  }

  function rateFormat(val) {
    return Number(val).toFixed();
  }

  return (
    <Graph
      type="circle"
      percent={rateFormat(rating)}
      color={rateColor(rating)}
    />
  );
}

RatingBar.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RatingBar.defaultProps = {
  rating: 0,
};

export default RatingBar;
