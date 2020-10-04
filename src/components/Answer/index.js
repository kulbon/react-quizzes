import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import check from '../../assets/icon-check.svg';

const StyledAnswer = styled.li`
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid #eee;
`;
const StyledRadio = styled.input`
  position: absolute;
  width: auto;
  opacity: 0;
  & + label:before {
    margin-right: 10px;
    flex: 0 0 20px;
    width: 20px;
    height: 20px;
    content: '';
    display: inline-block;
    background: #fff;
    border: 1px solid #bbb;
    border-radius: 50%;
    transition: all 0.3s;
  }
  &:checked {
    + label:before {
      content: '';
      background: #8bc53f url(${check}) no-repeat;
      background-position: center;
      background-size: 18px;
      border-color: #8bc53f;
    }
  }
`;
const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  font-size: 16px;
  line-height: 1.5;
  cursor: pointer;
`;

const Answer = ({ answer, handleAnswer }) => {
  return (
    <StyledAnswer>
      <StyledRadio
        type="radio"
        name="answers"
        id={answer.id}
        value={answer.id}
        onClick={e => handleAnswer(e.currentTarget.value)}
      />
      <StyledLabel htmlFor={answer.id}>{answer.answer}</StyledLabel>
    </StyledAnswer>
  );
};

Answer.propTypes = {
  answer: PropTypes.object.isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default Answer;
