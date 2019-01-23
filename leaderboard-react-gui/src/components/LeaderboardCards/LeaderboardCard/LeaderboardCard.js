import React from 'react';
import classes from './LeaderboardCard.module.css';
import Label from '../../UI/Label/Label';
import Button from '../../UI/Button/Button';

const relativeImgPath = '/img/';

const leaderboardCard = (props) => {
    return (
        <div className={classes.LeaderboardCard}>
            <div className={classes.imgContainer}>
                <img src={`${relativeImgPath}/${props.leaderboard.img}.png`} alt={props.leaderboard.name}/>
                <h3 style={{marginLeft: '1rem'}}>{props.leaderboard.name}</h3>
            </div>
            <div className={classes.infoContainer}>
                {props.leaderboard.type !== 'public' ? <Button>unsubscribe</Button> : null}
                <Label>{props.leaderboard.type}</Label>
            </div>
        </div>
    );
};

export default leaderboardCard;



