import React from 'react';
import { TextField, Button,Input } from '@material-ui/core/';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function Register(){
    //variable used to redirect users after registration 
    const history = useHistory();

    const {register, handleSubmit, errors} = useForm();
    
    const onSubmit = (data, error, props) => {
        //The first url is used to bypass CORS error
        fetch('https://cors-anywhere.herokuapp.com/'+'https://webhook.site/42fb35aa-a83e-4ee2-be2a-6a20ba2dfc7a', {
            method: 'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(function(response) {
            if(response.ok){
                alert("Thank you for registering")
                history.push('/');
            }
        })
        .catch((error) => {
            console.error('Error', error);
        })
    };

    
        return (
            <div>
                <h1> Register Page </h1>

                <form onSubmit={ handleSubmit(onSubmit) }>
                    <div className="container">
                        <div className="row"> 
                            <div className="col"> 
                                <input type="text" name="fName" placeholder="First Name" ref={ register({ required: "Please enter first name", minLength: {value: 2, message: "Name must be at least 2 characters"} }) }/> 
                                {errors.fName && <p> { errors.fName.message } </p>}
                            </div>
                            <div className="col">  
                                <input type="text" name="lName" placeholder="Last Name" ref={ register({ required: true, minLength: {value: 2, message: "Name must be at least 2 characters"} }) }/> 
                                {errors.lName && <p> { errors.lName.message } </p>}
                            </div>
                            <div className="col">  
                                <input type="text" name="uName" placeholder="Username" ref={ register }/> 
                            </div>
                            <div className="col">  
                                <input type="password" name="password" placeholder="Password" ref={ register({ required: "Please Enter password", minLength: {value: 8, message:"Password too short" }}) }/> 
                                {errors.password && <p> { errors.password.message } </p>}
                            </div>
                            <div className="col">
                                <input type="email" name="emailAddress" placeholder="Email Address" ref={ register({required: 'Required',pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "invalid email address"}}) }/>
                                {errors.emailAddress && <p> { errors.emailAddress.message } </p>}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Button variant="contained" onClick={ handleSubmit(onSubmit) }> Submit </Button>
                    </div>
                </form>

            </div>
        );
}