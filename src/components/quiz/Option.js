import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

const Option = ({ value, handleAnswer, correct_answer, isClicked }) => {
  const [red, setRed] = useState(false);

  const greenStyle = {
    backgroundColor: 'green',
    color: 'white',
  };
  const redStyle = {
    backgroundColor: 'red',
    color: 'white',
  };

  const handleClick = (value) => {
    handleAnswer(value);
    if (value !== correct_answer) {
      setRed(true);
    }
  };

  return (
    <Fragment>
      <button
        className="option"
        disabled={isClicked}
        style={
          isClicked && value === correct_answer
            ? greenStyle
            : red
            ? redStyle
            : {}
        }
        dangerouslySetInnerHTML={{ __html: value }}
        onClick={() => {
          !isClicked && handleClick(value);
        }}
      />
    </Fragment>
  );
};

Option.propTypes = {
  value: PropTypes.string.isRequired,
  handleAnswer: PropTypes.func.isRequired,
  correct_answer: PropTypes.func.isRequired,
  isClicked: PropTypes.func.isRequired,
};

export default Option;
