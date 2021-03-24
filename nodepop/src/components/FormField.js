import React from 'react';
import './LoginPage.css'

import classNames from 'classnames';

function FormField({className, label, ...props}){
    return (
        <div
        className = {classNames(
            'formField',
            {'formField--focused': false},
            className
        )}
        >
            <label className="formField-Label">
                <span>{label}</span>
                <input 
                className="formField-input"
                autoComplete="off"
                {...props}
                ></input>
            </label>
        </div>
    )
}

export default FormField;