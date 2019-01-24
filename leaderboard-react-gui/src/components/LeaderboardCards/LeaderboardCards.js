import React from 'react';
import LeaderboardCard from './LeaderboardCard/LeaderboardCard';

const leaderboardCards = props => {
    return props.leaderboards.map(l => {
        return <LeaderboardCard key={l.id} leaderboard={l}/>
    });
};

export default leaderboardCards;