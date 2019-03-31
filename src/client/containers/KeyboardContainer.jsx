import React from 'react';

import WhiteKey from '../components/WhiteKey.jsx';

const KeyboardContainer = ({ keys, lastSelected }) => (
  <div className='keyboard-container'>
    {keys.map(key => <WhiteKey wKey={key} lastSelected={lastSelected} />)}
  </div>
);

export default KeyboardContainer;