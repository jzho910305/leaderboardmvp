import React from 'react';
import classes from "./CheckBoxInput.module.css";

const checkBoxInput = props => {
    return (
        <div className={classes.formCheck}>
            <input type='checkbox' className={classes.formCheckInput}/>
            <label className={classes.formCheckLabel}>{props.label}</label>
        </div>
    );
};

export default checkBoxInput;