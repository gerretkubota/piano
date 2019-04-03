import React from 'react';
import PropTypes from 'prop-types';

const LogContainer = ({ userLog }) => (
  <div className='log-container'>
    <ul>
      {userLog.map((input, index) => <li key={`${input}${index}`}>{input}</li>)}
    </ul>
  </div>
);

LogContainer.propTypes = {
  userLog: PropTypes.arrayOf(PropTypes.string)
}

export default LogContainer;