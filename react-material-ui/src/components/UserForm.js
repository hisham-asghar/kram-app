import React, { Component } from 'react'
import FormUserDetails from './FormUserDetails'

export class UserForm extends Component {
    state = {
        step: 1,
        firstname: "",
        lastname: "",
        email: "",
        password: ""
    }
    // go to next step
    nextStep = () => {
        const {step} = this.state
        this.setState ({
            step: step + 1
        });
    }
    // go to prev step
    nextStep = () => {
        const {step} = this.state
        this.setState ({
            step: step - 1
        });
    }
    // handle fields change
    handleChange = input => e =>  {
        this.setState({[input ]: e.target.value});
    }

    render() {
        // pull set out of state; destructuring
        const {step} = this.state
        const{ firstname, lastname, email, password} = this.state;
        const values = {firstname, lastname, email, password}

        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                );
            case 2:
                return <h1>FormPersonalDetails</h1>;

            case 3:
                return <h1> Confirm </h1>;
            case 4:
                return <h1> Success </h1>;


        }
        return (
            <div>
                
            </div>
        )
    }
}

export default UserForm
