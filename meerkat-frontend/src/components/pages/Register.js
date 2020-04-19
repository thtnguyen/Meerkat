import React from 'react';
import { TextField, Button, Input, Chip } from '@material-ui/core/';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

export default function Register(){
    //variable used to redirect users after registration 
    const history = useHistory();

    const {register, handleSubmit, errors} = useForm({
        defaultValues: {

        }
    });

    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Angular' },
        { key: 1, label: 'jQuery' },
        { key: 2, label: 'Polymer' },
        { key: 3, label: 'React' },
        { key: 4, label: 'Vue.js' },
    ]);
    
    const onSubmit = (data, error, props) => {
        //The first url is used to bypass CORS error
        fetch('https://cors-anywhere.herokuapp.com/'+'https://webhook.site/0fa7de81-e70b-4085-9716-b3e11c982f5f', {
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

                <form onSubmit={ handleSubmit(handleSubmit(data => console.log(data))) }>
                    <div className="container">
                        <div className="row"> 
                            <div className="col"> 
                                <TextField 
                                    type="text" 
                                    name="fName" 
                                    placeholder="First Name" 
                                    inputRef={ 
                                        register({ 
                                            required: "Please enter first name", 
                                            minLength: {value: 2, message: "Name must be at least 2 characters"} 
                                            }) 
                                        }
                                /> 
                                {errors.fName && <p className="p-error"> { errors.fName.message } </p>}
                            </div>

                            <div className="col">  
                                <Input 
                                    type="text" 
                                    name="lName" 
                                    placeholder="Last Name" 
                                    inputRef={ 
                                        register({ 
                                            required: "Please enter last name", 
                                            minLength: {value: 2, message: "Name must be at least 2 characters"} }) 
                                        }
                                    /> 
                                {errors.lName && <p className="p-error"> { errors.lName.message } </p> }
                            </div>

                            <div className="col">  
                                <Input 
                                    type="text" 
                                    name="uName" 
                                    placeholder="Username" 
                                    inputRef={ 
                                        register({ 
                                            required: "Please enter Username", 
                                            minLength: {value: 2, message: "Name must be at least 2 characters"} }) 
                                        }
                                    /> 
                                {errors.lName && <p className="p-error"> { errors.lName.message } </p>}
                            </div>

                            <div className="col">  
                                <Input 
                                    type="password" 
                                    name="password" 
                                    placeholder="Password" 
                                    inputRef={ 
                                        register({ 
                                            required: "Please Enter password", 
                                            minLength: {value: 8, message:"Password too short" }}) 
                                        }
                                    /> 
                                {errors.password && <p className="p-error"> { errors.password.message } </p>}
                            </div>

                            <div className="col">
                                <Input 
                                    type="email" 
                                    name="emailAddress" 
                                    placeholder="Email Address" 
                                    inputRef={ 
                                        register({
                                            required: 'Required',
                                            pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 
                                            message: "invalid email address"}}) 
                                        }
                                    />
                                {errors.emailAddress && <p className="p-error"> { errors.emailAddress.message } </p>}
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