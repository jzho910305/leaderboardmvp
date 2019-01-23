import React from 'react';
import classes from '../Logo/Logo.module.css';

const logo = props => {
    return (
        <img className={classes.Logo} src='https://cdn.sisuwellness.com/logos/sisu_logo_v2.png' alt='sisu wellness logo' />
    );
};

export default logo;