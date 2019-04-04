import React from 'react';
import PropTypes from 'prop-types';

const WhiteKey = ({ wKey, lastSelected, handleClick }) => (
  <div
    className={lastSelected === wKey ? 'white-key highlighted' : 'white-key'}
    wkey={wKey}
    onClick={() => handleClick(wKey)}
  >
    <span className="key-name">{wKey}</span>
  </div>
);

WhiteKey.propTypes = {
  wKey: PropTypes.string,
  lastSelected: PropTypes.string,
  handleClick: PropTypes.func,
};

export default WhiteKey;
