import React, {Component, Fragment} from 'react';
import classes from './SignUpForm.module.css';
import Input from '../../components/UI/Input/Input';
import CheckBoxInput from '../../components/UI/Input/CheckBoxInput/CheckBoxInput';
import Button from '../../components/UI/Button/Button';
import Title from "../../components/UI/Title/Title";

export const formButtonStyle = {
    fontSize: '1rem',
    borderRadius: '.3rem',
    padding: '.5rem 1rem',
    background: '#004B7C'
};

class SignUp extends Component {
    render() {
        return (
            <Fragment>
                <Title>Sign Up</Title>
                <form className={classes.SignForm}>
                    <Input elementType='input' elementConfig={{type: 'email', placeholder: 'Enter email'}}
                           label='Email address'/>
                    <Input elementType='input' elementConfig={{type: 'password', placeholder: 'Password'}}
                           label='Password'/>
                    <Input elementType='input' elementConfig={{type: 'password', placeholder: 'Confirm Password'}}
                           label='Confirm Password'/>
                    <CheckBoxInput label='Sign Up as a referee?'/>
                    <Button style={formButtonStyle}>Sign Up</Button>
                </form>
            </Fragment>
        );
    }
}

export default SignUp;

