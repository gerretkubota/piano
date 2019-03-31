import React from 'react';

import WhiteKey from '../components/WhiteKey.jsx';

const KeyboardContainer = ({ keys, lastSelected, handleClick }) => (
  <div className='keyboard-container'>
    {keys.map(key => <WhiteKey 
                      wKey={key} 
                      lastSelected={lastSelected}
                      handleClick={handleClick} />)}
  </div>
);

export default KeyboardContainer;