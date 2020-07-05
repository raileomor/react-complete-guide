import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: '0', name: 'Rainer', age: 39 },
      { id: '1', name: 'Thiago', age: 5 },
      { id:'2', name: 'Yeni', age: 35 }
    ],
    otherState: 'some other value',
    username: 'raileomor',
    showPersons: false
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
              return <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.changeNameHandler(event, person.id)}>Delete</Person>
          })}
        </div>  
      );
    }

    return (
      <div className="App">
        <h1>Hy, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
          style={ style }
          onClick={this.togglePersonsHandler}>Switch values</button>
        { persons }
      </div>
    );
  }
}

export default App;
