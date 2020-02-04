import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav>
            <h3>Logo</h3>
            <ul id="NavBar">
                <li>
                    <Link to='/'> Home </Link>
                </li>
            </ul>
        </nav>
        )
    }
}
