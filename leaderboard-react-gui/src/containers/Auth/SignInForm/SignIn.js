import React, {Component, Fragment} from 'react';
import {formButtonStyle} from '../SignUpForm/SignUp';
import classes from '../SignUpForm/SignUpForm.module.css';
import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import Title from '../../../components/UI/Title/Title';
import Spinner from '../../../components/UI/Spinner/Spinner';
import AlertPanel from '../../../components/UI/AlertPanel/AlertPanel';
import {checkValidity} from '../validator';

import * as actions from '../../../store/actions/index';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
    state = {
        signInForm: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    label: 'Email',
                    placeholder: 'Enter email'
                },
                value: '',
                validation: {
                    required: true
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
            }
        },
        loading: false,
        valid: false
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.signInForm
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

        this.setState({signInForm: updatedForm, valid: formIsValid});
    };

    signInHandler = event => {
        event.preventDefault();
        this.props.onAuth(this.state.signInForm.email.value, this.state.signInForm.password.value, false);
    };

    render() {
        const formInputs = [];
        for (let key in this.state.signInForm) {
            formInputs.push({
                id: key,
                config: this.state.signInForm[key]
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
            form = <Spinner/>;
        }

        let error = null;

        if (this.props.error) {
            error =  <AlertPanel>{this.props.error.message}</AlertPanel>
        }

        let redirect = null;
        if (this.props.isAuthenticated) {
            redirect = <Redirect to='/myLeaderboards'/>
        }

        return (
            <Fragment>
                <Title>Sign In</Title>
                <form className={classes.SignForm}
                      onSubmit={this.signInHandler}
                      id='signInForm'>
                    {redirect}
                    {error}
                    {form}
                    <Button disabled={!this.state.valid}
                            type='submit'
                            form='signInForm'
                            style={formButtonStyle}>
                        Sign In
                    </Button>
                </form>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.signInError,
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);