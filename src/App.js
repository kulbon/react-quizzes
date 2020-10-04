import React from 'react';
import Quizzes from './components/Quizzes/';
import logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Quiz</h2>
      </div>
      <Quizzes />
    </div>
  );
};

export default App;
