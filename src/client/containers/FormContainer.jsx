import React from 'react';
import PropTypes from 'prop-types';

const FormContainer = ({ userInput, handleChange, handlePlay }) => (
  <form className="form-container" onSubmit={handlePlay}>
    <input type="text" value={userInput} onChange={handleChange} />
    <button type="button" onClick={handlePlay}>
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
