import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CSSTransitionGroup } from 'react-transition-group';
import QuestionCount from '../QuestionCount';
import Answers from '../Answers';

const StyledQuestion = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  background: #fff;
  border-radius: 3px;
  padding: 1.5rem;
`;

const Question = ({ question, index, questionTotal, handleAnswer }) => {
  return (
    <CSSTransitionGroup
      component={StyledQuestion}
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div key={question.id}>
        <QuestionCount counter={index} total={questionTotal} />
        <h2 className="question">
          {++index}. {question.question}
        </h2>
        <Answers answers={question.answers} handleAnswer={handleAnswer} />
      </div>
    </CSSTransitionGroup>
  );
};

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionTotal: PropTypes.number.isRequired,
  handleAnswer: PropTypes.func.isRequired,
};

export default Question;
