import React, {Fragment} from 'react';
import classes from './NameAvatar.module.css';

const getInitial = name => {
    let names = name.split(' '),
        initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
}

// todo: add propTypes to check name
const nameAvatar = props => {
    return (
        <Fragment>
            <span className={classes.NameAvatar}
                  data-letters={getInitial(props.name)}>
            </span>
            <span className={classes.name}>{props.name}</span>
        </Fragment>
    );
};

export default nameAvatar;