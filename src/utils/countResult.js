export const findUserAnswer = (answers, userAnswerId) =>
  answers.find(item => item.id === parseInt(userAnswerId));

export const findCorrectAnswer = answers =>
  answers.find(item => item.correct === true);

export const countResult = (quizQuestions, userAnswers) => {
  return quizQuestions.reduce((acc, val, index) => {
    const userAnswerId = userAnswers[index];
    const answer = findUserAnswer(val.answers, userAnswerId);
    const counter = answer.correct === true ? 1 : 0;
    return acc + counter;
  }, 0);
};
