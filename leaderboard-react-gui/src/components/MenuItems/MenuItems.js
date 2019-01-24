import React from 'react';
import MenuItem from './MenuItem/MenuItem';
import classes from './MenuItems.module.css';

const menuItems = props => {
    return (
        <ul className={classes.MenuItems}>
            {props.items.map( item => <MenuItem key={item.name} {...item}>{item.name}</MenuItem>)}
        </ul>
    );
}

export default menuItems;