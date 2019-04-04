import React, { Component } from 'react';

import KeyboardContainer from './KeyboardContainer.jsx';
import FormContainer from './FormContainer.jsx';
import LogContainer from './LogContainer.jsx';

import {
  checkInput,
  adjustLog,
  adjustScroll,
} from '../utils/helperFunctions.js';

export default class AppContainer extends Component {
  constructor() {
    super();

    this.state = {
      keys: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
      blackKeys: ['c-sharp', 'd-sharp', 'f-sharp', 'g-sharp', 'a-sharp'],
      lastSelected: '',
      userInput: '',
      userLog: [],
      inputSequence: [],
    };
  }

  handleClick = wKey => {
    let { lastSelected, userLog } = this.state;

    if (lastSelected !== wKey) {
      lastSelected = wKey;
      adjustLog(userLog, lastSelected);
    } else {
      lastSelected = '';
    }

    this.setState({ lastSelected, userLog }, () =>
      adjustScroll('log-container')
    );
  };

  handleChange = event => {
    const userInput = event.target.value.toUpperCase();
    this.setState({ userInput });
  };

  handleSequence = inputSequence => {
    setTimeout(() => {
      let lastSelected = '';

      if (inputSequence.length > 0 && inputSequence) {
        lastSelected = inputSequence[0];
        this.setState({ lastSelected }, () => {
          adjustScroll('log-container');
          setTimeout(() => {
            this.setState({ lastSelected: '' }, () => {
              this.handleSequence(inputSequence.slice(1));
            });
          }, 1000);
        });
      }
    }, 500);
  };

  handlePlay = async event => {
    event.preventDefault();
    event.stopPropagation();

    let { userLog, userInput } = this.state;

    try {
      if (checkInput(userInput)) {
        const inputSequence = userInput.split(',');

        await this.handleSequence(inputSequence);

        adjustLog(userLog, userInput);
        userInput = '';
        this.setState({ userLog, userInput }, () =>
          adjustScroll('log-container')
        );
      } else {
        throw new Error('Enter correct format of: C,D,...');
      }
    } catch (err) {
      alert(err);
    }
  };

  render() {
    const { keys, lastSelected, userInput, blackKeys, userLog } = this.state;

    return (
      <div className="app-container">
        <h1>Piano Keyboard</h1>
        <KeyboardContainer
          keys={keys}
          lastSelected={lastSelected}
          handleClick={this.handleClick}
          blackKeys={blackKeys}
        />
        <LogContainer userLog={userLog} />
        <FormContainer
          userInput={userInput}
          handleChange={this.handleChange}
          handlePlay={this.handlePlay}
        />
      </div>
    );
  }
}
