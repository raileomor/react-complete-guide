import React from 'react';
import classes from './Person.css';

const person = (props) => {
    return (
        <div className={classes.Person}>
            <h2>I'm {props.name} and I'm {props.age} years old!</h2>
            <p onClick={props.click}>{props.children}</p>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person;