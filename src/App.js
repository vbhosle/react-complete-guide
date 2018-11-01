import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '232', name: 'Max', age: 26 },
      { id: '335', name: 'Rahul', age: 29 },
      { id: '654', name: 'Max', age: 28 }
    ],
    showPersons: false
  }

  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(
      (p) => p.id === id
    );

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map(
              (person, index) => <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            )
          }
        </div>
      );
      btnClass = classes.Red;
    }

    let assginedClasses = [];

    if (this.state.persons.length <= 2) {
      assginedClasses.push(classes.red);
    }

    if (this.state.persons.length <= 1) {
      assginedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>React App!</h1>
        <p className={assginedClasses.join(' ')}>This is working!</p>
        <button
          className={btnClass}
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
