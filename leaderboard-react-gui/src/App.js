import React, {Component, Fragment} from 'react';
import './App.css';


import {Route, Switch} from 'react-router-dom';

// todo: import data mocks
import {leaderboards} from "./data/dataWarehouse";
import {competitors} from "./data/dataWarehouse";

// components imports
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LeaderboardCards from './components/LeaderboardCards/LeaderboardCards';
import Leaderboard from './components/Leaderboard/Leaderboard';
import SignUpForm from './containers/SignUpForm/SignUp';
import SignInForm from './containers/SignInForm/SignIn';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <Switch>
                    <Route path="/" exact render={() => <LeaderboardCards leaderboards={leaderboards}/>}/>
                    <Route path="/leaderboard" exact render={() => <Leaderboard leaderboardRows={competitors}/>}/>
                    <Route path="/signup" exact component={SignUpForm}/>
                    <Route path="/signin" exact component={SignInForm}/>
                </Switch>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
