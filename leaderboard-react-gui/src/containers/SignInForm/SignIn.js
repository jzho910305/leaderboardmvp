import React, {Component, Fragment} from 'react';
import {formButtonStyle} from '../SignUpForm/SignUp';
import classes from '../SignUpForm/SignUpForm.module.css';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Title from '../../components/UI/Title/Title';

class SignIn extends Component {
    render() {
        return (
            <Fragment>
                <Title>Sign In</Title>
                <form className={classes.SignForm}>
                    <Input elementType='input' elementConfig={{type: 'email', placeholder: 'Enter email'}}
                           label='Email address'/>
                    <Input elementType='input' elementConfig={{type: 'password', placeholder: 'Password'}}
                           label='Password'/>
                    <Button style={formButtonStyle}>Sign In</Button>
                </form>
            </Fragment>
        );
    }
}

export default SignIn;