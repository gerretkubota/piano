import React from 'react';

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

export default KeyboardContainer;