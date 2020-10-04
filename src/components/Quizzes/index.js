import React, { useEffect, useState } from 'react';
import Quiz from '../Quiz';
import QuizList from '../QuizList';
import shuffleArray from '../../utils/shuffle';

const Quizzes = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [quiz, setQuiz] = useState(false);

  useEffect(() => {
    fetch(`quizQuestions.json`)
      .then(r => r.json())
      .then(data => {
        setQuizzes(data.quizzes);
      });
  }, []);

  const handleChosseQuiz = quiz => {
    quiz.questions.map(question => {
      return shuffleArray(question.answers);
    });
    setQuiz(quiz);
  };

  return quiz ? (
    <Quiz questions={quiz.questions} handleBackToList={() => setQuiz(false)} />
  ) : (
    <QuizList quizzes={quizzes} handleClick={handleChosseQuiz} />
  );
};

Quizzes.propTypes = {};

export default Quizzes;
