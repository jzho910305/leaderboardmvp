import React from 'react';
import classes from './Title.module.css';

const title = props => {
    return (
        <div className={classes.Title}>
            <span>{props.children}</span>
        </div>
    );
};

export default title;