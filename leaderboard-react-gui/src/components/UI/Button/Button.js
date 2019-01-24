import React from 'react';
import classes from '../Button/Button.module.css';

const button = props => {
    return (
      <button className={classes.Button} style={props.style}>{props.children}</button>
    );
};

export default button;