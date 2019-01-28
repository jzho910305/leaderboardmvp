import React from 'react';
import classes from './StatisticDisplay.module.css';

export const defaultColor = '#6c757d';

const statisticDisplay = props => {
    const color = props.color ? props.color : defaultColor;
    return (
        <div className={classes.StatisticDisplay}>
            <span style={{color: color}}>{props.result}</span>
            <p>{props.caption}</p>
        </div>
    );
};

export default statisticDisplay;