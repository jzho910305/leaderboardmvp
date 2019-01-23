import React from 'react';
import classes from '../Label/Label.module.css';

const label = props => {
    return (
        <span className={classes.Label}>
            {props.children}
        </span>
    )
};

export default label;