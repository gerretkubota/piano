import React from 'react';
import PropTypes from 'prop-types';

const BlackKey = ({ bKeyPos }) => (
  <div className={`black-key ${bKeyPos}`}></div>
);

BlackKey.propTypes = {
  bKeyPos: PropTypes.string
}

export default BlackKey;