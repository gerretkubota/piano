import React, { Component } from 'react';

import KeyboardContainer from './KeyboardContainer.jsx';

export default class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      keys: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      lastSelected: '',
      userInput: '',
      userLog: '',
      inputSequence: [],
    }
  }

  handleClick = wKey => {
    console.log('clicked');
    let { lastSelected } = this.state;

    if (lastSelected !== wKey) lastSelected = wKey;
    else lastSelected = ''

    this.setState({ lastSelected });
  }
  
  handlePlay = () => {}
  
  render() {
    const { keys, lastSelected, userInput } = this.state;

    return (
      <div className='app-container'>
        <KeyboardContainer
          keys={keys}
          lastSelected={lastSelected}
          handleClick={this.handleClick} />
          {/* FormContainer */}
          {/* LogContainer */}
      </div>
    )
  }
}