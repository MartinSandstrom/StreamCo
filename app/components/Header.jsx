import React from 'react';
import {render} from 'react-dom';

export default class Header extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
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
                <nav className="navbar navbar-dark bg-dark mb-3">

                    <div className="container">
                        <span className="navbar-brand">
                            Popular titles
                        </span>
                    </div>
                </nav>
            </div>
        );
    }
}
