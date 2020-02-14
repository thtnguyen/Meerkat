import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavigationBar extends Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand > 
                <Link to="/"> Meerkat </Link>
            </Navbar.Brand>
        </Navbar>
        )
    }
}

