import React from 'react';
import {render} from 'react-dom';

export default class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            navbarIsOpen: false
        }
    }

    toggleNavBar = () => this.setState({navbarIsOpen: !this.state.navbarIsOpen});

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
                    <div className="container">
                        <button className="navbar-toggler navbar-toggler-right" type="button" onClick={this.toggleNavBar}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="/">DEMO streaming</a>
                        <div className={"navbar-collapse " + (this.state.navbarIsOpen ? '' : 'collapse')}>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Log in</a>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-default">Start your free trial</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
