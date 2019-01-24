import React from 'react';
import classes from './MenuItem.module.css';
import { NavLink } from 'react-router-dom';

const menuItem = props => {
    return (
        <li className={classes.MenuItem}>
            <NavLink
                to={props.link}
                exact={props.exact}
                activeClassName={classes.active}>{props.children}</NavLink>
        </li>
    );
};

export default menuItem;