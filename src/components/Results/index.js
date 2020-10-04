import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import ResultSummary from '../ResultSummary';
import { countResult } from '../../utils/countResult';

const StyledResult = styled.div`
  position: relative;
  margin: 0 auto;
  background: #fff;
  border-radius: 3px;
  padding: 1.5rem;
`;
const StyledButton = styled.button`
  background: #a2a2a2;
  border: none;
  border-radius: 3px;
  padding: 1rem;
  cursor: pointer;
  color: #fff;
`;

const Result = ({ quizQuestions, userAnswers, handleBackToList }) => {
  return (
    <CSSTransitionGroup
      component={StyledResult}
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <h2>
        Liczba zdobytych punktów to: {countResult(quizQuestions, userAnswers)}{' '}
        na {quizQuestions.length}
      </h2>
      <ResultSummary quizQuestions={quizQuestions} userAnswers={userAnswers} />
      {handleBackToList && (
        <StyledButton onClick={() => handleBackToList()}>
          ← Back to the list
        </StyledButton>
      )}
    </CSSTransitionGroup>
  );
};

Result.propTypes = {
  quizQuestions: PropTypes.array.isRequired,
  userAnswers: PropTypes.array.isRequired,
  handleBackToList: PropTypes.func,
};

export default Result;
