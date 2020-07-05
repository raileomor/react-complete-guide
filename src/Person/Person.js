import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <h2>I'm { props.name } and I'm { props.age } years old!</h2>
            <p onClick={ props.click }>{ props.children }</p>
            <input type="text" onChange={ props.changed } />
        </div>
    )
}

export default person;