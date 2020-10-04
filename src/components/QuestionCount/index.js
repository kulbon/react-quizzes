import React from 'react';
import PropTypes from 'prop-types';
import Range from '../Range';

const QuestionCount = ({ counter, total }) => {
  const value = ((counter / total) * 100).toFixed(0);
  return (
    <>
      <Range min={0} max={100} step={1} value={value} />
      {value} - 100%
    </>
  );
};

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default QuestionCount;
