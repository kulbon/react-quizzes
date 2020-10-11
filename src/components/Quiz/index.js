import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import IntlProvider from 'react-intl/lib/src/components/provider';
import Question from '../Question';
import Result from '../Results';
import { update, stateReducer } from '../../reducer/stateReducer';

const Quiz = ({ quizzes, locale, ...props }) => {
  const quizUrl = props.match.params.name;

  const findQuizByUrl = () => {
    return quizzes.find(quiz => quiz.url === quizUrl);
  };

  const quiz = findQuizByUrl();

  const [state, dispatch] = useReducer(stateReducer, {
    quizQuestions: quiz.questions,
    counter: 0,
    userAnswers: '',
    result: '',
  });

  const handleAnswer = val => {
    setUserAnswer(val);
    if (state.userAnswers.length < state.quizQuestions.length - 1) {
      setTimeout(() => setNextQuestion(), 300);
    } else {
      setTimeout(() => setResults(), 300);
    }
  };

  const setUserAnswer = answer => {
    dispatch(
      update({
        userAnswers: [...state.userAnswers, answer],
      })
    );
  };

  const setNextQuestion = () => {
    const counter = state.counter + 1;

    dispatch(
      update({
        counter: counter,
      })
    );
  };

  const setResults = () => {
    dispatch(
      update({
        result: true,
      })
    );
  };

  const renderQuestion = () => {
    return (
      state.quizQuestions && (
        <Question
          index={state.counter}
          question={state.quizQuestions[state.counter]}
          questionTotal={state.quizQuestions.length}
          handleAnswer={handleAnswer}
        />
      )
    );
  };

  const renderResult = () => {
    return (
      <Result
        quizQuestions={state.quizQuestions}
        userAnswers={state.userAnswers}
      />
    );
  };

  return (
    <IntlProvider locale={quiz.lang} messages={locale[quiz.lang]}>
      {state.result ? renderResult() : renderQuestion()}
    </IntlProvider>
  );
};

Quiz.propTypes = {
  quizzes: PropTypes.array.isRequired,
  locale: PropTypes.object.isRequired,
};

export default Quiz;
