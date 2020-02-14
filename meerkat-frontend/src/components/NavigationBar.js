import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavigationBar extends Component {
    render() {
        return (
        <Navbar bg="light" expand="lg">
            <h3>Logo</h3>
            <ul id="NavBar">
                <li>
                    <Link to='/'> Home </Link>
                </li>
            </ul>
        </Navbar>
        )
    }
}

