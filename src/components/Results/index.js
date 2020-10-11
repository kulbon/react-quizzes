import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Formattedmessage from 'react-intl/lib/src/components/message';
import { CSSTransitionGroup } from 'react-transition-group';
import ResultSummary from '../ResultSummary';
import { countResult } from '../../utils/results';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const StyledResult = styled.div`
  position: relative;
  margin: 0 auto;
  background: #fff;
  border-radius: 3px;
  padding: 1.5rem;
`;
const StyledButton = styled(NavLink)`
  background: #a2a2a2;
  border: none;
  border-radius: 3px;
  padding: 1rem;
  cursor: pointer;
  color: #fff;
`;

const Result = ({ quizQuestions, userAnswers }) => {
  const userResult = countResult(quizQuestions, userAnswers);
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
        <Formattedmessage id={'header.score'} /> {userResult}
        <Formattedmessage id={'header.from'} />
        {quizQuestions.length} (
        {((userResult / quizQuestions.length) * 100).toFixed(0)}%)
      </h2>
      <ResultSummary quizQuestions={quizQuestions} userAnswers={userAnswers} />
      <StyledButton to={'/'}>
        ← <Formattedmessage id={'header.back.to.list'} />{' '}
      </StyledButton>
    </CSSTransitionGroup>
  );
};

Result.propTypes = {
  quizQuestions: PropTypes.array.isRequired,
  userAnswers: PropTypes.array.isRequired,
};

export default Result;
