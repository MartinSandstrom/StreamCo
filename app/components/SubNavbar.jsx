import React from 'react';
import {render} from 'react-dom';

export default class SubNavbar extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-dark mb-3">
                    <div className="container">
                        <span className="navbar-brand">
                            {this.props.title}
                        </span>
                    </div>
                </nav>
            </div>
        );
    }
}
