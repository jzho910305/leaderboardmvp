import React from 'react';
import classes from '../Button/Button.module.css';

const button = props => {
    return (
      <button disabled={props.disabled}
              className={classes.Button}
              style={props.style}
              onClick={props.clicked}>{props.children}</button>
    );
};

export default button;