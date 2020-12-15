import React, { Component } from 'react';

function Input(props) {
    return(
        <div>
            <label htmlFor="fruit-filter"> Filter the Fruits!</label>
            <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
        </div>
    )
}

export default Input;