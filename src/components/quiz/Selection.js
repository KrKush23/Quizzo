import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Selection = ({ searchQuestions }) => {
  const [amount, setAmount] = useState(1);
  const [category, setCategory] = useState(9);
  const [difficulty, setDifficulty] = useState('easy');

  //Function to get questions
  const getQuestions = (e) => {
    e.preventDefault();
    searchQuestions(amount, difficulty, category);
  };

  return (
    <div>
      <form className="form" onSubmit={getQuestions}>
        <div className="field">
          <label className="field__name">Number of questions :</label>
          <input
            className="field__value"
            type="number"
            min="1"
            max="50"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="field__name">Difficulty :</label>
          <select
            className="field__value"
            name="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="field">
          <label className="field__name">Category :</label>
          <select
            className="field__value"
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="9">Generate Knowledge</option>
            <option value="10">Books</option>
            <option value="11">Films</option>
            <option value="12">Music</option>
            <option value="13">Musicals & Theaters</option>
            <option value="14">Television</option>
            <option value="15">Video Games</option>
            <option value="16">Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Computers</option>
            <option value="19">Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Comics</option>
            <option value="30">Gadgets</option>
            <option value="31">Japanese Anime & Manga</option>
            <option value="32">Cartoon & Animations</option>
          </select>
        </div>

        <button className="btn" type="submit">
          PLAY
        </button>
      </form>
    </div>
  );
};

Selection.propTypes = {
  searchQuestions: PropTypes.func.isRequired,
};

export default Selection;
