import React from 'react';
import classes from './AlertPanel.module.css';

const alertPanel = props => <div className={classes.AlertPanel}>{props.children}</div>;

export default alertPanel;