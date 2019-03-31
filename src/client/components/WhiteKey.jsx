import React from 'react';

const WhiteKey = ({ wKey, lastSelected, handleClick }) => (
  <div className={lastSelected === wKey ? 'white-key highlighted' : 'white-key'}
       wkey={wKey}
       onClick={() => handleClick(wKey)}>
    {wKey}
  </div>
);

export default WhiteKey;