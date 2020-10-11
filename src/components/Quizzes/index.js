import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Quiz from '../Quiz';
import QuizList from '../QuizList';

const Quizzes = ({ quizzes, locale }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <QuizList quizzes={quizzes} />
        </Route>
        <Route
          path="/:name"
          render={props => (
            <Quiz quizzes={quizzes} locale={locale} {...props} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

Quizzes.propTypes = {
  quizzes: PropTypes.array.isRequired,
  locale: PropTypes.object.isRequired,
};

export default Quizzes;
