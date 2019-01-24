import React, {Component} from 'react';
import LeaderboardCard from '../../components/LeaderboardCard/LeaderboardCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import {leaderboards} from '../../data/dataWarehouse'

class LeaderboardCards extends Component {
    state = {
        leaderboards: null
    }

    componentDidMount() {
        setTimeout(
            () => this.setState({leaderboards: leaderboards}),
            1000
        );
    }

    render() {
        return (
            <div>
                {this.state.leaderboards ? this.state.leaderboards.map(l => {
                    return <LeaderboardCard key={l.id} leaderboard={l}/>
                }) : <Spinner/>}
            </div>
        );
    }

};

export default LeaderboardCards;