import React, { Component } from 'react';

import KeyboardContainer from './KeyboardContainer.jsx';
import FormContainer from './FormContainer.jsx';

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
    let { lastSelected, userLog } = this.state;

    if (lastSelected !== wKey) {
      lastSelected = wKey;
      userLog += (lastSelected + '\n');
    } else {
      lastSelected = ''
    }

    this.setState({ lastSelected, userLog });
  }

  handleChange = event => {
    let userInput = event.target.value;
    this.setState({ userInput });
  }
  
  handlePlay = event => {
    event.stopPropagation();
    console.log('play button pressed!');
    let { userLog, userInput, lastSelected } = this.state;
    userLog += (userInput + '\n');
    userInput = '';
    lastSelected = ''
    this.setState({ userLog, userInput, lastSelected });
  }
  
  render() {
    const { keys, lastSelected, userInput, blackKeys, userLog} = this.state;

    return (
      <div className='app-container'>
        <KeyboardContainer
          keys={keys}
          lastSelected={lastSelected}
          handleClick={this.handleClick}
          blackKeys={blackKeys} />
        {/* LogContainer */}
        <FormContainer 
          userInput={userInput}
          handleChange={this.handleChange}
          handlePlay={this.handlePlay}
          userLog={userLog} />
      </div>
    )
  }
}