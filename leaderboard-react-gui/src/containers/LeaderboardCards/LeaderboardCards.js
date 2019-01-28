import React, {Component} from 'react';
import LeaderboardCard from '../../components/LeaderboardCard/LeaderboardCard';
import Spinner from '../../components/UI/Spinner/Spinner';
import Title from '../../components/UI/Title/Title';
import Button from '../../components/UI/Button/Button';
import {leaderboards} from '../../data/dataWarehouse'
import classes from './Leaderboard.module.css';
import {withRouter} from 'react-router-dom';

const style = {
    fontSize: '.8rem',
    borderRadius: '.3rem',
    padding: '.5rem 1rem',
    background: '#445967'
};

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

    onAddNewLeaderboardButtonClickHandler = () => {
        this.props.history.push('/addnewleaderboard');
    };

    render() {
        return (
            <div>
                <Title>Leaderboards</Title>
                <div className={classes.addLeaderboardButtonContainer}>
                    <Button style={style}
                            clicked={this.onAddNewLeaderboardButtonClickHandler}>
                        Add a new leaderboard
                    </Button>
                </div>
                {this.state.leaderboards ? this.state.leaderboards.map(l => {
                    return <LeaderboardCard key={l.id} leaderboard={l}/>
                }) : <Spinner/>}
            </div>
        );
    }

};

export default withRouter(LeaderboardCards);