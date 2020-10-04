import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { findUserAnswer, findCorrectAnswer } from '../../utils/countResult';

const StyledQuestion = styled.div`
  border-top: 1px solid #eee;
`;

const StyledUserAnswer = styled.p`
  color: ${({ userAnswer, correctAnswer }) =>
    userAnswer === correctAnswer ? 'green' : 'red'};
`;

const ResultSummaryQuestion = ({ question, index, userAnswerId }) => {
  const userAnswer = findUserAnswer(question.answers, userAnswerId);
  const correctAnswer = findCorrectAnswer(question.answers);

  return (
    <StyledQuestion>
      <h3>
        {++index}. {question.question}
      </h3>
      <h4>Correct answer: </h4>
      <p>{correctAnswer.answer}</p>
      <h4>Your answer:</h4>
      <StyledUserAnswer
        correctAnswer={correctAnswer.id}
        userAnswer={userAnswer.id}
      >
        {userAnswer.answer}
      </StyledUserAnswer>
      {question.clarification && (
        <>
          <h4>Clarification</h4>
          <p>
            {question.clarification}{' '}
            {question.clarificationUrl && (
              <a href={question.clarificationUrl}>More</a>
            )}
          </p>
        </>
      )}
    </StyledQuestion>
  );
};

ResultSummaryQuestion.propTypes = {
  question: PropTypes.object.isRequired,
  index: PropTypes.number,
  userAnswerId: PropTypes.string.isRequired,
};

export default ResultSummaryQuestion;
