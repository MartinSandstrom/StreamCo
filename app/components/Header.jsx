import React from 'react';
import {render} from 'react-dom';

export default class Header extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
                    <div className="container">
                        <a className="navbar-brand" href="/">DEMO streaming</a>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Log in</a>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-default">Start trial</button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}
