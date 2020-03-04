import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './home.css';
export default class Home extends Component {
    clicked(){
        console.log("I have been clicked");
    }
    render() {
        return (
            <div>
                <div id="mySidenav" class="sidenav">
                    <a href="/create" id="create">Create Rooms</a>
                    <a href="/View" id="view">View Rooms</a>
                    <a href="#" id="about">About Us</a>
                    <a href="#" id="nothing">XYzhere</a>
                </div>
                <footer class="container-fluid text-center">
                    <p>All rights reserved || Meerkat</p>
                </footer>
            </div>
        )
    }
}

