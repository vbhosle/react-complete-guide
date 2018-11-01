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

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index,1);
    this.setState({persons: persons});
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map(
              (person,index) => <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} />
            )
          }
        </div>
      );
    }
    return (
      <div className="App">
        <h1>React App!</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>

        {persons}

      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Programatic form of JSX!'));
  }
}

export default App;
