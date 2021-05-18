import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const Questionnaire = ({ currentQuestion, handleScore, nextQuestion }) => {
  const [isClicked, setIsClicked] = useState(false);
  const { question, correct_answer, options } = currentQuestion;

  const handleAnswer = (answer) => {
    setIsClicked(true);
    setTimeout(() => {
      if (answer === correct_answer) {
        handleScore();
      }
      nextQuestion();
      setIsClicked(false);
    }, 1500);
  };

  return (
    <div>
      <h2 className="question" dangerouslySetInnerHTML={{ __html: question }} />
      {/* used 'dangerouslySetInnerHTML' to parse the quotes of json file */}

      {options &&
        options.map((option) => (
          <div className="options">
            <Option
              key={option}
              value={option}
              handleAnswer={handleAnswer}
              correct_answer={correct_answer}
              isClicked={isClicked}
            />
          </div>
        ))}
    </div>
  );
};

Questionnaire.propTypes = {
  currentQuestion: PropTypes.object.isRequired,
  handleScore: PropTypes.func.isRequired,
  nextQuestion: PropTypes.func.isRequired,
};

export default Questionnaire;
