import React from 'react';
import PropTypes from 'prop-types';

const LogContainer = ({ userLog, handleClear }) => (
  <div className="log-container">
    <div className="log-header">
      <p>HISTORY LOG</p>
      <button type="button" id="delete-button" onClick={handleClear}>
        CLEAR
      </button>
    </div>
    <div className="log-text-container">
      <ul>
        {userLog.map((input, index) => (
          <li key={`${input}${index}`}>{input}</li>
        ))}
      </ul>
    </div>
  </div>
);

LogContainer.propTypes = {
  userLog: PropTypes.arrayOf(PropTypes.string),
  handleClear: PropTypes.func,
};

export default LogContainer;
