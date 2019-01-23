import React, {Component, Fragment} from 'react';
import './App.css';
import LeaderboardCard from './components/LeaderboardCard/LeaderboardCard';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';


class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <LeaderboardCard name='AFL'/>
                <LeaderboardCard name='AFL'/>
                <LeaderboardCard name='AFL'/>
                <LeaderboardCard name='AFL'/>
                <LeaderboardCard name='AFL'/>
                <Footer/>
            </Fragment>
        );
    }
}

export default App;
