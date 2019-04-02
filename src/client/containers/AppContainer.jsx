import React, { Component } from 'react';
// import 'babel-polyfill' from 

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
    // let userInput = event.target.value;
    // userInput = userInput.toUpperCase();
    // WORK ON REGEX LOGIC

    // let inputSequence = userInput.split(',');
    // userInput = '';
    // userInput.match(/^([cdefgabCDEFGAB][,])+([cdefgabCDEFGAB])$/)
    // if (/^[CDEFGABcdefgab,]*$/) {
    //   userInput.toUpperCase();
    //   inputSequence = userInput.split(',');
    // } else {
    //   userInput = '';
    //   console.error('Enter correct format');
    // }


    // this.setState({ userInput });

  }

  checkInput = (str) => {
    if (str.length === 1) {
      return str.match(/^[CDEFGABcdefgab]$/);
    } else {
      return str.match(/^([CDEFGABcdefgab],)+[CDEFGABcdefgab]$/);
    }
  }

  handleSequence = (inputSequence) => {
    setTimeout(() => {
      let lastSelected = '';

      if (inputSequence.length > 0 && inputSequence) {
        lastSelected = inputSequence[0];
        this.setState({ lastSelected }, () => {
          setTimeout(() => {
            this.setState({ lastSelected: '' }, () => {
              this.handleSequence(inputSequence.slice(1));
            });
          }, 1000)
        })
      }
    }, 500);
  }
  
  handlePlay = async (event) => {
    event.stopPropagation();

    let { userLog, userInput } = this.state;
    let inputSequence = userInput.split(',')

    await this.handleSequence(inputSequence);

    userLog += `${userInput}\n`;
    userInput = '';
    this.setState({ userLog, userInput });
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