import React from 'react';
import Logo from './Logo/Logo';
import MenuItems from './MenuItems/MenuItems';
import classes from './Header.module.css';

const header = props => {
    // todo: replace with actually items
    const items = [
        {name: 'Sign In', link: '/signin', exact: true},
        {name: 'Sign Up', link: 'signup', exact: true}
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
};

export default header;