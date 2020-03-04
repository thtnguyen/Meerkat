import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    clicked(){
        console.log("I have been clicked");
    }
    render() {
        return (
            <div>
                <h1>
                    Home Page
                </h1>

                <button onClick={event => window.location.href = '/create'} id="Button">
                    Create Room
                </button>
                <div>
                    <Link to="/register"> Register </Link>
                    |
                    <Link to="/login"> Login </Link>
                </div>
            </div>
        )
    }
}

