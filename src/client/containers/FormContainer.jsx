import React from 'react';

const FormContainer = ({ userInput, handleChange, handlePlay, userLog }) => (
  <div className='form-container'>
    <input type='text' value={userInput} onChange={handleChange} />
    <button onClick={handlePlay}>PLAY</button>
    {/* testing to see if the userlog will display correct userInput + prev */}
    {userLog} 
  </div>
);

export default FormContainer;