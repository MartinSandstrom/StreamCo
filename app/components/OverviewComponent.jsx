import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom'

export default class OverviewComponent extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>
                    <Link to="/movies">Movies</Link>
                </h1>
                <h1>
                    <Link to="/series">Series</Link>
                </h1>
            </div>
        );
    }
}
