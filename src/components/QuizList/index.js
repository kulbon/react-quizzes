import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledQuiz = styled(NavLink)`
  cursor: pointer;
  font-size: 2.4rem;
  text-decoration: none;
`;

const StyledContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 3px;
  padding: 1.5rem;
`;

const QuizList = ({ quizzes }) => {
  return (
    <StyledContainer>
      <h1>Choose a quiz:</h1>
      <ul>
        {quizzes.map(quiz => (
          <li key={quiz.name}>
            <StyledQuiz to={quiz.url}>{quiz.name}</StyledQuiz>
          </li>
        ))}
      </ul>
    </StyledContainer>
  );
};

QuizList.propTypes = {
  quizzes: PropTypes.array.isRequired,
};

export default QuizList;
