import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = ({ userInput, handleChange, handlePlay }) => (
  <form className="form-container" onSubmit={handlePlay}>
    <input type="text" value={userInput} onChange={handleChange} size="35" />
    <button type="button" id="play-button" onClick={handlePlay}>
      PLAY
    </button>
  </form>
);

FormContainer.propTypes = {
  userInput: PropTypes.string,
  handleChange: PropTypes.func,
  handlePlay: PropTypes.func,
};

export default FormContainer;
