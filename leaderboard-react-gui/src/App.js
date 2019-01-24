import React, {Component} from 'react';

import {Route, Switch, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actions from './store/actions/index';

// components imports
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';
import LeaderboardCards from './containers/LeaderboardCards/LeaderboardCards';
import Leaderboard from './containers/Leaderboard/Leaderboard';
import SignUpForm from './containers/Auth/SignUpForm/SignUp';
import SignInForm from './containers/Auth/SignInForm/SignIn';
import Logout from './containers/Auth/Logout/Logout';

const style = {textAlign: 'center', color: '#004B7C'};
const PLEASE_LOG_IN = <h1 style={style}>Please sign in...</h1>;

class App extends Component {
    componentDidMount () {
        this.props.onTryAutoSignup();
    }

    render() {
        const routes =
            this.props.isAuthenticated ?
                <Switch>
                    <Route path="/myLeaderboards" exact render={() => <LeaderboardCards/>}/>
                    <Route path="/leaderboard/:id" exact render={() => <Leaderboard/>}/>
                    <Route path="/logout" exact component={Logout}/>
                    <Redirect to="/myLeaderboards" />
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
