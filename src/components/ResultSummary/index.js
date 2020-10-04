import React from 'react';
import PropTypes from 'prop-types';
import ResultSummaryQuestion from '../ResultSummaryQuestion';

const ResultSummary = ({ quizQuestions, userAnswers }) => {
  return quizQuestions.map((question, index) => (
    <ResultSummaryQuestion
      index={index}
      key={question.id}
      question={question}
      userAnswerId={userAnswers[index]}
    />
  ));
};

ResultSummary.propTypes = {
  quizQuestions: PropTypes.array.isRequired,
  userAnswers: PropTypes.array.isRequired,
};

export default ResultSummary;
