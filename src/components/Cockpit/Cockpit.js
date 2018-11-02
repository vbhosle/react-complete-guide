import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    let assginedClasses = [];
    let btnClass = '';
    
    if(props.showPerson){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assginedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
      assginedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>React App!</h1>
            <p className={assginedClasses.join(' ')}>This is working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                Toggle Persons
        </button>
        </div>
    );
};

export default cockpit;