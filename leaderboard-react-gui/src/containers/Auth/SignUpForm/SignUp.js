import React, {Component, Fragment} from 'react';
import classes from './SignUpForm.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Title from '../../../components/UI/Title/Title';
import Spinner from '../../../components/UI/Spinner/Spinner';
import AlertPanel from '../../../components/UI/AlertPanel/AlertPanel';
import {checkValidity} from '../validator';

import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

export const formButtonStyle = {
    fontSize: '1rem',
    borderRadius: '.3rem',
    padding: '.5rem 1rem',
    background: '#004B7C'
};

class SignUp extends Component {
    state = {
        signUpForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    label: 'Email',
                    placeholder: 'Enter email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    label: 'Password',
                    placeholder: 'Enter password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
            confirmPassword: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    label: 'Confirm Password',
                    placeholder: 'Confirm password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            }
        },
        loading: false,
        valid: false,
        passwordMismatch: false
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.signUpForm
        };
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedForm) {
            formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({signUpForm: updatedForm, valid: formIsValid});
    };

    signUpHandler = event => {
        event.preventDefault();
        if (this.state.signUpForm.password.value !== this.state.signUpForm.confirmPassword.value) {
            this.setState({...this.state, passwordMismatch: true});
        } else {
            this.props.onAuth(this.state.signUpForm.email.value, this.state.signUpForm.password.value, true);
        }

    };

    render() {
        const formInputs = [];
        for (let key in this.state.signUpForm) {
            formInputs.push({
                id: key,
                config: this.state.signUpForm[key]
            });
        }

        let form = formInputs.map(
            input => <Input key={input.id}
                            elementType={input.config.elementType}
                            elementConfig={input.config.elementConfig}
                            value={input.value}
                            invalid={!input.config.valid}
                            touched={input.config.touched}
                            changed={event => this.inputChangedHandler(event, input.id)}/>);

        if (this.props.loading) {
            form = <Spinner/>
        }

        let error = null;

        if (this.props.error) {
            error =  <AlertPanel>{this.props.error.message}</AlertPanel>
        }

        let redirect = null;

        if (this.props.isAuthenticated) {
            redirect = <Redirect to='/myLeaderboards'/>
        }

        let passwordMismatchError = null;

        if (this.state.passwordMismatch) {
            passwordMismatchError = <AlertPanel>Passwords don't match.</AlertPanel>
        }

        return (
            <Fragment>
                <Title>Sign Up</Title>
                <form className={classes.SignForm}
                      onSubmit={this.signUpHandler}
                      id='signUpForm'>
                    {redirect}
                    {error}
                    {passwordMismatchError}
                    {form}
                    {/*<CheckBoxInput label='Sign Up as a referee?'/>*/}
                    <Button disabled={!this.state.valid}
                            type='submit'
                            form='signUpForm'
                            style={formButtonStyle}>
                        Sign Up
                    </Button>
                </form>

            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.signUpError,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

