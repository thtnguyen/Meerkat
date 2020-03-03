import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

export default class NavigationBar extends Component {
    render() {
        return (
            
            <nav class="navbar navbar-expand-lg navbar-static-top">
                <div>
                    <Navbar.Brand > 
                        <Link to="/"><img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="mdb logo"></img></Link>
                    </Navbar.Brand>
                </div>
                <div >
                    <ul class="nav nav-pills">
                        <li class="nav-item">
                            <a class="nav-link" href="/userpage">Profile</a>
                        </li>
                        <li class="nav-item" id="createRoom">
                            <a class="nav-link" href="/create">Create Room</a>
                        </li>
                       
                    <ul class="nav navbar-nav navbar-right">
                    <li><a href="/Register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="/Login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    
                    </ul>
                    </ul>
                </div>
                
            </nav>
        )
    }
}

