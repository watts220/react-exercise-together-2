import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MsgBox from './MsgBox.js';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    showGames: true,
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  };
  
  addItem = newMessage => {
    this.setState(oldState => ({
      messages: [...oldState.messages, newMessage],
    }));
  };
  
  isDisabled = () => {
    return false;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">

          {users.map((user, index) => (
            <MsgBox key={index} messages={this.state.messages} user={user} sendHandler={this.addItem} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
