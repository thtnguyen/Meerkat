import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'


export default class NavigationBar extends Component {
    render() {
        return (
        <div id="navbar-div-background">
            <nav class="navbar navbar-static-top">
                <Navbar.Brand > 
                    <Link to="/"><img src="../../images/standin-logo"></img></Link>
                </Navbar.Brand>
            </nav>
        </div>
        
        )
    }
}

