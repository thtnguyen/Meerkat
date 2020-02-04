import React, { Component } from 'react'

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
            </div>
        )
    }
}

