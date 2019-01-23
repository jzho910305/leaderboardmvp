import React from 'react';
import LeaderboardRow from './LeaderboardRow/LeaderboardRow';

const leaderboard = props => {
    return (
        <div>
            {props.leaderboardRows.map(r => {
                return (
                    <LeaderboardRow row={r}/>
                );
            })}
        </div>
    );
};

export default leaderboard;