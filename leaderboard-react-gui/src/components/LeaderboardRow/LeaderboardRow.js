import React from 'react';
import classes from './LeaderboardRow.module.css';
import NameAvatar from '../UI/NameAvatar/NameAvatar';
import StatisticDisplay from '../UI/StatisticDisplay/StatisticDisplay';
import VerticalLine from '../UI/VerticalLine/VerticalLine';

const gold = {backgroundColor: '#ffcf40'};
const leaderboardRow = props => {
    const points = props.row.wins + props.row.draws - props.row.losses;
    return (
        <div className={classes.LeaderboardRow}>
            <div style={props.rank === 1 ? gold : null} className={classes.rank}>
                <span>{props.rank}</span>
            </div>
            <div className={classes.details}>
                <div>
                    <NameAvatar name={props.row.name}/>
                </div>
                <div>
                    <StatisticDisplay result={props.row.wins} caption='Wins'/>
                </div>
                <div>
                    <StatisticDisplay result={props.row.draws} caption='Draws'/>
                </div>
                <div>
                    <StatisticDisplay result={props.row.losses} caption='Losses' color='#dc3545'/>
                </div>
                <VerticalLine/>
                <div>
                    <StatisticDisplay result={points} caption='Points' color='#004B7C'/>
                </div>
            </div>
        </div>
    );
};

export default leaderboardRow;