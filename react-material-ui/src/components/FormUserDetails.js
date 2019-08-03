import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    }

    render() {
        // destructuring so we can use values as a variable
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details"/>
                    <TextField
                        hintText = "Enter Your First Name"
                        floatingTableText = "First Name"
                        onChange = {handleChange('firstName')}
                        defaultValue = {values.firstName}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default FormUserDetails
