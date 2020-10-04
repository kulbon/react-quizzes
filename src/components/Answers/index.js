import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Answer from '../Answer';

const StyledAnswers = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Answers = ({ answers, handleAnswer }) => {
  return (
    <StyledAnswers>
      {answers.map(answer => (
        <Answer key={answer.id} answer={answer} handleAnswer={handleAnswer} />
      ))}
    </StyledAnswers>
  );
};

Answers.propTypes = {
  answers: PropTypes.array.isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default Answers;
