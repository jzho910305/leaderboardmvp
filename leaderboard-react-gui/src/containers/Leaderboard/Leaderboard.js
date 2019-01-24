import React, {Component} from 'react';
import LeaderboardRow from '../../components/LeaderboardRow/LeaderboardRow';
import {withRouter} from 'react-router-dom';
import {competitors} from "../../data/dataWarehouse";
import Spinner from '../../components/UI/Spinner/Spinner';

class Leaderboard extends Component {
    state = {
        leaderboardRows: null
    };

    componentDidMount() {
        const leaderboardId = this.props.location.state.id;
        const filteredCompetitors = competitors.filter(c => c.leaderboardId === leaderboardId);
        setTimeout(
            () => {
                this.setState({leaderboardRows: filteredCompetitors});
            },
            1000
        );
    }

    render() {
        return (
            <div>
                {this.state.leaderboardRows ? this.state.leaderboardRows
                    .sort((a, b) => {
                        return (b.wins + b.draws - b.losses) - (a.wins + a.draws - a.losses);
                    })
                    .map((r, index) => {
                        return (
                            <LeaderboardRow row={r} rank={index + 1}/>
                        );
                    }) : <Spinner/>}
            </div>
        );
    }

};

export default withRouter(Leaderboard);