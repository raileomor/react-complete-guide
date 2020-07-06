import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char';

class App extends Component {
  state = {
    inputText: []
  };

  deleteCharHandler = (charIndex) => {
    const chars = [...this.state.inputText];
    chars.splice(charIndex, 1);
    this.setState({
      inputText: chars
    });
  }

  changeInputHandler = (event) => {
    const charArray = event.target.value.split('');
    this.setState({
      inputText: charArray
    });
  }

  render() {
    const length = this.state.inputText.length;
    let chars = [];

    if (length > 0) {
      chars = (
        <div>
          {this.state.inputText.map((c, index) => {
            return <Char
              char={c}
              key={index}
              click={() => this.deleteCharHandler(index)} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hy, I'm a React App</h1>
        <input type="text" onChange={this.changeInputHandler} value={this.state.inputText.join('')} />
        <p>Length: {length}</p>
        <Validation length={length} />
        {chars}
      </div>
    );
  }
}

export default App;
