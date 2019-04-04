import React from 'react';
import PropTypes from 'prop-types';

const LogContainer = ({ userLog }) => (
  <div className="log-container">
    <div className="log-header">
      <p>HISTORY LOG</p>
      <button type="button" id="delete-button">
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
};

export default LogContainer;
