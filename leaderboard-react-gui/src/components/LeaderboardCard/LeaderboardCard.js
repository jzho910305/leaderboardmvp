import React from 'react';
import classes from './LeaderboardCard.module.css';
import Label from '../UI/Label/Label';
import Button from '../UI/Button/Button';
import AflImg from '../../assets/img/afl.png';

const leaderboardCard = (props) => {
    return (
        <div className={classes.LeaderboardCard}>
            <div className={classes.imgContainer}>
                <img src={AflImg} alt={props.name}/>
                <h3 style={{marginLeft: '1rem'}}>{props.name}</h3>
            </div>
            <div className={classes.infoContainer}>
                <Button>unsubscribe</Button>
                <Label>subscribed</Label>
                <Label>private</Label>
            </div>
        </div>
    );
};

export default leaderboardCard;