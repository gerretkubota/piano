import React from 'react';

const FormContainer = ({ userInput, handleChange, handlePlay }) => (
  <div className='form-container'>
    <input type='text' 
           value={userInput} 
           onChange={handleChange} />
    <button onClick={handlePlay}>PLAY</button>
  </div>
);

export default FormContainer;