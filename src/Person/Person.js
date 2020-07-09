import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className="Person" style={style}>
            <h2>I'm { props.name } and I'm { props.age } years old!</h2>
            <p onClick={ props.click }>{ props.children }</p>
            <input type="text" onChange={ props.changed } />
        </div>
    )
}

export default Radium(person);