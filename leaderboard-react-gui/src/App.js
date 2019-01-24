import React, {Component} from 'react';

import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from './store/actions/index';

// todo: import data mocks
import {leaderboards} from "./data/dataWarehouse";
import {competitors} from "./data/dataWarehouse";

// components imports
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';
import LeaderboardCards from './components/LeaderboardCards/LeaderboardCards';
import Leaderboard from './components/Leaderboard/Leaderboard';
import SignUpForm from './containers/Auth/SignUpForm/SignUp';
import SignInForm from './containers/Auth/SignInForm/SignIn';
import Logout from './containers/Auth/Logout/Logout';

const style = {textAlign: 'center', color: '#004B7C'};
const PAGE_NOT_FOUND = <h1 style={style}>404...</h1>;
const PLEASE_LOG_IN = <h1 style={style}>Please sign in...</h1>;

class App extends Component {
    componentDidMount () {
        this.props.onTryAutoSignup();
    }

    render() {
        const routes =
            this.props.isAuthenticated ?
                <Switch>
                    <Route path="/home" exact render={() => <LeaderboardCards leaderboards={leaderboards}/>}/>
                    <Route path="/leaderboard" exact render={() => <Leaderboard leaderboardRows={competitors}/>}/>
                    <Route path="/logout" exact component={Logout}/>
                    <Redirect to="/home" />
                </Switch> :
                <Switch>
                    <Route path="/signup" exact component={SignUpForm}/>
                    <Route path="/signin" exact component={SignInForm}/>
                    <Route path="/" render={() => PLEASE_LOG_IN}/>
                </Switch>;
        return (
            <div>
                <Header/>
                {routes}
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch( actions.authCheckState() )
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
