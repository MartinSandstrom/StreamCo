import React from 'react';
import {render} from 'react-dom';

class Application extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-inverse bg-primary">
                    <a href="#" class="navbar-brand">StreamingCo</a>
                </nav>
                <div className="container">
                    <h1>Hello world</h1>
                </div>
            </div>
        );
    }
}

render(
    <Application/>, document.getElementById('app'));
