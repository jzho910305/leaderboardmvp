import React, {Component} from 'react';
import {formState} from './formState';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import {checkValidity} from "../Auth/validator";
import classes from './AddNewLeaderboardForm.module.css';
import Title from '../../components/UI/Title/Title';
import {formButtonStyle} from '../Auth/SignUpForm/SignUp';
import {add} from '../../data/api';
import {withRouter} from 'react-router-dom';

class AddNewLeaderboardForm extends Component {
    state = formState;

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedForm = {
            ...this.state.leaderboard
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

        this.setState({leaderboard: updatedForm, valid: formIsValid});
    };

    createLeaderboardHandler = event => {
        event.preventDefault();
        const leaderboard = {
            id: this.state.leaderboard.id.value,
            img: this.state.leaderboard.league.value,
            name: this.state.leaderboard.name.value,
            type: this.state.leaderboard.type.value,
        };
        add(leaderboard);
        this.props.history.push('/myLeaderboards');
    };

    render() {
        const formInputs = [];
        for (let key in this.state.leaderboard) {
            formInputs.push({
                id: key,
                config: this.state.leaderboard[key]
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
        return (
            <form className={classes.AddNewLeaderboardForm}
                  onSubmit={this.createLeaderboardHandler}
                  id='addNewLeaderboardForm'>
                <Title>Create Leaderboard</Title>
                {form}
                <Button disabled={!this.state.valid}
                        type='submit'
                        form='signUpForm'
                        style={formButtonStyle}>
                    Create
                </Button>
            </form>
        );
    }
}

export default withRouter(AddNewLeaderboardForm);