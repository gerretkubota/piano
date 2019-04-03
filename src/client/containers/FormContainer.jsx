import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = ({ userInput, handleChange, handlePlay }) => (
  <div className="form-container">
    <input type="text" value={userInput} onChange={handleChange} />
    <button type="button" onClick={handlePlay}>
      PLAY
    </button>
  </div>
);

FormContainer.propTypes = {
  userInput: PropTypes.string,
  handleChange: PropTypes.func,
  handlePlay: PropTypes.func,
};

export default FormContainer;
