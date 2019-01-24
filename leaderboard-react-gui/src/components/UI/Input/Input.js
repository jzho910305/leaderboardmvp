import React from 'react';

import classes from './Input.module.css';

const input = ( props ) => {
    let inputElement = null;
    const inputClasses = [classes.formControl];

    if (props.invalid && props.touched) {
        inputClasses.push(classes.invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div className={classes.formGroup}>
            <label>{props.elementConfig.label}</label>
            {inputElement}
            <small id="error"
                   style={{display: props.invalid && props.touched ? 'block' : 'none'}}
                   className={`${classes.formText} ${classes.textMuted}`}>
                Invalid {props.elementConfig.label}.
            </small>
        </div>
    );

};

export default input;