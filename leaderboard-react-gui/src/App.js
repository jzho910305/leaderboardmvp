import React, {Component, Fragment} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import {Route, Switch} from 'react-router-dom';

import {leaderboards} from "./data/dataWarehouse";

import LeaderboardCards from './components/LeaderboardCards/LeaderboardCards';
import Leaderboard from './components/Leaderboard/Leaderboard';
import {competitors} from "./data/dataWarehouse";


class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route path="/" exact render={() => <LeaderboardCards leaderboards={leaderboards}/>}/>
                    <Route path="/leaderboard" exact render={() => <Leaderboard leaderboardRows={competitors}/>}/>
                </Switch>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
