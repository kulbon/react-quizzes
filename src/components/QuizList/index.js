import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledQuiz = styled.li`
  cursor: pointer;
  font-size: 2.4rem;
`;

const StyledContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 3px;
  padding: 1.5rem;
`;

const QuizList = ({ quizzes, handleClick }) => {
  return (
    <StyledContainer>
      <h1>Choose a quiz:</h1>
      {quizzes.map(quiz => (
        <StyledQuiz key={quiz.name} onClick={() => handleClick(quiz)}>
          {quiz.name}
        </StyledQuiz>
      ))}
    </StyledContainer>
  );
};

QuizList.propTypes = {
  quizzes: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default QuizList;
