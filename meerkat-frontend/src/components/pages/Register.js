import React from 'react';
import { TextField, Button,Input } from '@material-ui/core/'
import { useForm } from 'react-hook-form';


export default function Register(){
    const {register, handleSubmit, errors} = useForm();
        
    const onSubmit = (data) => {
        console.log(data);
    };

        return (
            <div>
                <h1> Register Page </h1>
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <div className="container">
                        <div className="row"> 
                            <div className="col"> 
                                <input type="text" name="fName" placeholder="First Name" ref={ register }/> 
                            </div>
                            <div className="col">  
                                <input type="text" name="lName" placeholder="Last Name" ref={ register }/> 
                            </div>
                            <div className="col">  
                                <input type="text" name="uName" placeholder="Username" ref={ register }/> 
                            </div>
                            <div className="col">  
                                <input type="text" name="password" placeholder="Password" ref={ register({required: "Please Enter password", minLength: {value: 8, message:"Password too short" }}) }/> 
                            </div>
                        </div>
                    </div>
                    {errors.password && alert(errors.password.message)}
                    <div>
                        <Button variant="contained" onClick={ handleSubmit(onSubmit) }> Submit </Button>
                    </div>
                </form>
            </div>
        );
}