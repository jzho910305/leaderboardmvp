import React from 'react';
import classes from './LeaderboardCard.module.css';
import Label from '../UI/Label/Label';
import {withRouter} from 'react-router-dom';

const relativeImgPath = '/img';

const leaderboardCard = (props) => {
    const route = {
        pathname: `/leaderboard/${props.leaderboard.id}`,
        state: {id: props.leaderboard.id}
    };
    return (
        <div className={classes.LeaderboardCard} onClick={() => {
            props.history.push(route)
        }}>
            <div className={classes.imgContainer}>
                <img src={`${relativeImgPath}/${props.leaderboard.img}.png`} alt={props.leaderboard.name}/>
                <h3 style={{marginLeft: '1rem'}}>{props.leaderboard.name}</h3>
            </div>
            <div className={classes.infoContainer}>
                {props.leaderboard.type !== 'public' ? <Label style={{backgroundColor: '#dc3545'}}>subscribed</Label> : null}
                <Label>{props.leaderboard.type}</Label>
            </div>
        </div>
    );
};

export default withRouter(leaderboardCard);



