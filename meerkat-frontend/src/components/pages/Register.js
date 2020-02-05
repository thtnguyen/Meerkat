import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core/'

export default class Register extends Component {
    handleSubmit(event){
        alert();
    }
    render() {
        return (
            <div>
                <h1> Register Page </h1>
                <form onSubmit={ this.handleSubmit }>
                    <label> First Name </label>
                    <TextField id="fName" ></TextField>
                    <Button variant="contained" onClick={this.handleSubmit}> Submit </Button>
                </form>
            </div>
        )
    }
}
