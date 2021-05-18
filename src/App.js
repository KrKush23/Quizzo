import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Selection from './components/quiz/Selection';
import Questionnaire from './components/quiz/Questionnaire';

import './style.css';

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  //Function to search questions
  const searchQuestions = async (amount, difficulty, category) => {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=${difficulty}&category=${category}`
    );
    setQuestions(res.data.results);

    const newQuestions = res.data.results.map((question) => ({
      ...question,
      options: [question.correct_answer, ...question.incorrect_answers].sort(
        () => Math.random() - 0.5
        // as random generates 0 to 1...and -0.5  will result +ve or -ve
      ),
    }));
    setQuestions(newQuestions);
  };

  //Function to handle score
  const handleScore = () => {
    setScore(score + 1);
  };

  //Function to change question
  const nextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
  };

  //Function to restart quiz
  const restartQuiz = () => {
    setQuestions([]);
    setCurrentIndex(0);
    setScore(0);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Quizzo</h1>
      </header>

      {questions.length === 0 ? (
        <Selection searchQuestions={searchQuestions} />
      ) : currentIndex < questions.length ? (
        <Questionnaire
          currentQuestion={questions[currentIndex]}
          handleScore={handleScore}
          nextQuestion={nextQuestion}
        />
      ) : (
        <div className="result">
          <h1 className="result__text">
            Your Score: {score} out of {currentIndex}
          </h1>
          <button className="btn" onClick={restartQuiz}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
