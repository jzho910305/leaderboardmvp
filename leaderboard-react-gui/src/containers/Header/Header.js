import React, {Component} from 'react';
import Logo from '../../components/UI/Logo/Logo';
import MenuItems from '../../components/MenuItems/MenuItems';
import classes from './Header.module.css';

import {connect} from 'react-redux';

class Header extends Component {
    // todo: replace with actually items

    render() {
        const items = this.props.isAuthenticated ? [
            {name: 'Logout', link: '/logout', exact: true}
        ] : [
            {name: 'SignIn', link: '/signin', exact: true},
            {name: 'SignUp', link: '/signup', exact: true}
        ];

        return (
            <header className={classes.Header}>
                <div>
                    <div>
                        <Logo/>
                        <span style={{
                            marginLeft: '1.5rem',
                            fontWeight: 'bold'
                        }}>Leaderboard Coding Challenge Solution by Jing</span>
                    </div>
                    <MenuItems items={items}/>
                </div>
            </header>
        );
    }

};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps, null)(Header);