import React from 'react';

import WhiteKey from '../components/WhiteKey.jsx';
import BlackKey from '../components/BlackKey.jsx';

const KeyboardContainer = ({ keys, lastSelected, handleClick, blackKeys }) => (
  <div className='keyboard-container'>
    {keys.map(key => <WhiteKey 
                        wKey={key} 
                        lastSelected={lastSelected}
                        handleClick={handleClick} />)}
    
    {blackKeys.map(key => <BlackKey bKeyPos={key} />)}
  </div>
);

export default KeyboardContainer;