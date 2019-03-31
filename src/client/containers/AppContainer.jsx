import React, { Component } from 'react';

import KeyboardContainer from './KeyboardContainer.jsx';

export default class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      keys: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      blackKeys: ['c-sharp', 'd-sharp', 'f-sharp', 'g-sharp', 'a-sharp'],
      lastSelected: '',
      userInput: '',
      userLog: '',
      inputSequence: [],
    }
  }

  handleClick = wKey => {
    let { lastSelected } = this.state;

    if (lastSelected !== wKey) lastSelected = wKey;
    else lastSelected = ''

    this.setState({ lastSelected });
  }
  
  handlePlay = () => {}
  
  render() {
    const { keys, lastSelected, userInput, blackKeys } = this.state;

    return (
      <div className='app-container'>
        <KeyboardContainer
          keys={keys}
          lastSelected={lastSelected}
          handleClick={this.handleClick}
          blackKeys={blackKeys} />
          {/* FormContainer */}
          {/* LogContainer */}
      </div>
    )
  }
}