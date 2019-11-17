import React from 'react'
import classes from './Employee.css'

const person = (props) => {

    return (
        <div className={classes.Employee}>
            <p onClick={props.click}>name: {props.name} -  Age:  {props.age}</p>
            <p>{props.children}</p>
            {/* <input type="text" onChange={props.changed} value={props.name}></input> */}
        </div>
    )
}

export default person;