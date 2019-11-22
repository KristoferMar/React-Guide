import React from 'react'
import classes from './Input.css'

const input = (props) => {
    let inputElement = null;

    switch (props.inputType) {
        case ('input'):
            inputElement = < input className = {} {...props }
            /> < / / We pass the normal atributes to the input
            break;
        case ('textarea'):
            inputElement = < textarea className = {} {...props }
            />
            break;
        default:
            inputElement = < input className = {} {...props }
            />

    }

    return ( <
        div >
        <
        label > { props.label } < /label> { inputElement } </div >
    );
};

export default input;