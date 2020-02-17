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
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link disabled" href="/"> Home </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

