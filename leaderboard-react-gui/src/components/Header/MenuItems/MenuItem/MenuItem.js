import React from 'react';
import classes from './MenuItem.module.css';

const menuItem = props => {
    return (
        <li className={classes.MenuItem}>
            <a>{props.children}</a>
        </li>
    );
};

export default menuItem;