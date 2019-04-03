import React from 'react';
import PropTypes from 'prop-types';

import WhiteKey from '../components/WhiteKey.jsx';
import BlackKey from '../components/BlackKey.jsx';

const KeyboardContainer = ({ keys, lastSelected, handleClick, blackKeys }) => (
  <div className='keyboard-container'>
    {keys.map(key => (
      <WhiteKey 
        key={key}
        wKey={key} 
        lastSelected={lastSelected}
        handleClick={handleClick} />))}
    
    {blackKeys.map(key => <BlackKey key={key} bKeyPos={key} />)}
  </div>
);

KeyboardContainer.propTypes = {
  keys: PropTypes.arrayOf(PropTypes.string),
  lastSelected: PropTypes.string,
  handleClick: PropTypes.func,
  blackKeys: PropTypes.arrayOf(PropTypes.string)
}

export default KeyboardContainer;