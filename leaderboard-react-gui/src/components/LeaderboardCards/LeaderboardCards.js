import React from 'react';
import {Leaderboards} from '../../data/dataWarehouse';
import LeaderboardCard from './LeaderboardCard/LeaderboardCard';

const leaderboardCards = props => {
    return props.leaderboards.map(l => {
        return <LeaderboardCard key={l.id} leaderboard={l}/>
    });
};

export default leaderboardCards;