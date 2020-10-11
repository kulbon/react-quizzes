import React, { useState, useEffect } from 'react';
import Quizzes from './components/Quizzes/';
import logo from './assets/logo.svg';
import './App.css';

const App = () => {
  const [quizzes, setQuizzes] = useState(false);
  const [locale, setLocale] = useState(false);

  useEffect(() => {
    fetch(`quizQuestions.json`)
      .then(r => r.json())
      .then(data => {
        setQuizzes(data.quizzes);
      });
    fetch(`locale/ui.json`)
      .then(r => r.json())
      .then(data => {
        setLocale(data);
      });
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Quiz</h2>
      </div>
      {quizzes && locale && <Quizzes quizzes={quizzes} locale={locale} />}
    </div>
  );
};

export default App;
