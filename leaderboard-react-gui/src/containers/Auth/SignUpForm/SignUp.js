import React, {Component, Fragment} from 'react';
import classes from './SignUpForm.module.css';
import Input from '../../../components/UI/Input/Input';
import CheckBoxInput from '../../../components/UI/Input/CheckBoxInput/CheckBoxInput';
import Button from '../../../components/UI/Button/Button';
import Title from "../../../components/UI/Title/Title";
import {checkValidity} from '../validator';

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
        valid: false
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
        const formData = {};
        for (let formElementIdentifier in this.state.signUpForm) {
            formData[formElementIdentifier] = this.state.signUpForm[formElementIdentifier].value;
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

        return (
            <Fragment>
                <Title>Sign Up</Title>
                <form className={classes.SignForm}
                      onSubmit={this.signUpHandler}
                      id='signUpForm'>
                    {formInputs.map(
                        input => <Input key={input.id}
                                        elementType={input.config.elementType}
                                        elementConfig={input.config.elementConfig}
                                        value={input.value}
                                        invalid={!input.config.valid}
                                        touched={input.config.touched}
                                        changed={ event => this.inputChangedHandler(event, input.id)}/>
                    )}
                    <CheckBoxInput label='Sign Up as a referee?'/>
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

export default SignUp;

