import React from 'react';

const validation = (props) => {
    const tooShort = 'Text too short';
    const longEnough = 'Text long enough';
    
    return (
        <div>
            <p>{props.length >= 5 ? longEnough : tooShort}</p>
        </div>
    );
}

export default validation;