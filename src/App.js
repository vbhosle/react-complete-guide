import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Viraj', age: 26 },
      { name: 'Rahul', age: 29 },
      { name: 'Max', age: 28 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Rahul', age: 29 },
        { name: 'Max', age: 28 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 26 },
        { name: event.target.value, age: 29 },
        { name: 'Max', age: 28 }
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px soild blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>React App!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Switch Persons
        </button>
        {
          this.state.showPersons ?
            <div>
              <Person click={() => this.switchNameHandler('Mandy')} name={this.state.persons[0].name} age={this.state.persons[0].age} />
              <Person changed={this.nameChangedHandler} name={this.state.persons[1].name} age={this.state.persons[1].age} />
              <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Games</Person>
            </div>
            : null
        }
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Programatic form of JSX!'));
  }
}

export default App;
