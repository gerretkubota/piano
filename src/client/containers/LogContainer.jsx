import React from 'react';
import PropTypes from 'prop-types';

const LogContainer = ({ userLog }) => (
  <div className='log-container'>
    <ul>
      {userLog.map(input => <li>{input}</li>)}
    </ul>
  </div>
);

LogContainer.propTypes = {
  userLog: PropTypes.arrayOf(PropTypes.string)
}

export default LogContainer;