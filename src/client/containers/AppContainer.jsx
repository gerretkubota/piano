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

  /**
   * @param {string} wKey
   * Check if lastSelected matches wKey, it doesn't, assign lastSelected with wKey
   * and it should highlight corresponding key.
   * If it doesn't match, assign empty tring to lastSelected
   * set new state and invoke adjustScroll after the update
   */
  handleClick = wKey => {
    let { lastSelected, userLog } = this.state;
    const tempArr = userLog.slice(0);
    if (lastSelected !== wKey) {
      lastSelected = wKey;
      adjustLog(tempArr, lastSelected);
    } else {
      lastSelected = '';
    }

    this.setState({ lastSelected, userLog: tempArr }, () =>
      adjustScroll('log-text-container')
    );
  };

  /**
   * @param {event} event
   * Get user input from textfield and uppercase the input
   * set new userInput to state
   */
  handleChange = event => {
    const userInput = event.target.value.toUpperCase();
    this.setState({ userInput });
  };

  /**
   * @param {array} inputSequence
   * Recursively highlight all the keys within inputSequence for 1 second each
   * The outer setTimeout will apply a .5 second delay between highlighting,
   * The first element of inputSequence will always highlight as the array will be sliced
   * recursively. lastSelected will have the first element of the array and will update
   * the state with lastSelected, as it is done updating it will invoke an inner setTimeout
   * which will highlight the lastSelected key for 1 second and then reset the lastSelected to unhighlight
   */
  handleSequence = inputSequence => {
    setTimeout(() => {
      let lastSelected = '';

      if (inputSequence.length > 0 && inputSequence) {
        lastSelected = inputSequence[0];
        this.setState({ lastSelected }, () => {
          adjustScroll('log-text-container');
          setTimeout(() => {
            this.setState({ lastSelected: '' }, () => {
              this.handleSequence(inputSequence.slice(1));
            });
          }, 1000);
        });
      }
    }, 500);
  };

  /**
   * @param {event} event
   * Check to see if the userInput is in the correct format by calling the
   * checkInput helper function.
   * If valid input, split the input by ',' and store into inputSequence
   * then asynchronously call handleSequence with the inputSequence.
   * Invoke adjustLog after await is done, reset userInput and setState
   * If it's not valid, alert error
   */
  handlePlay = async event => {
    event.preventDefault();

    let { userLog, userInput } = this.state;

    try {
      if (checkInput(userInput)) {
        const inputSequence = userInput.split(',');
        const tempUserLog = userLog.splice(0);

        await this.handleSequence(inputSequence);

        adjustLog(tempUserLog, userInput);
        userInput = '';
        this.setState({ userLog: tempUserLog, userInput }, () =>
          adjustScroll('log-text-container')
        );
      } else {
        throw new Error('Enter correct format of: C,D,...');
      }
    } catch (err) {
      alert(err);
    }
  };

  handleClear = () => {
    this.setState({ userLog: [], lastSelected: '' });
  };

  render() {
    const { keys, lastSelected, userInput, blackKeys, userLog } = this.state;

    return (
      <div className="app-container">
        <h1>PIANO KEYBOARD</h1>
        <KeyboardContainer
          keys={keys}
          lastSelected={lastSelected}
          handleClick={this.handleClick}
          blackKeys={blackKeys}
        />
        <LogContainer userLog={userLog} handleClear={this.handleClear} />
        <FormContainer
          userInput={userInput}
          handleChange={this.handleChange}
          handlePlay={this.handlePlay}
        />
      </div>
    );
  }
}
