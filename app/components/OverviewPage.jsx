import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import SubNavBar from './SubNavBar.jsx';

export default class OverviewPage extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <SubNavBar title="Popular titles"></SubNavBar>
                <div className="container">
                    <div className="row">
                        <div className="m-2 genre-wrapper">
                            <Link to="/movies" className="genre-card-link">
                                <div className="card genre-card">
                                    <img src="assets/placeholder.png" alt="image url"/>
                                    <h2 className="genre-card-text">Movies</h2>
                                </div>
                            </Link>
                            Popular movies
                        </div>
                        <div className="m-2 genre-wrapper">
                            <Link to="/series" className="genre-card-link">
                                <div className="card genre-card">
                                    <img src="assets/placeholder.png" alt="image url"/>
                                    <h2 className="genre-card-text">Series</h2>
                                </div>
                            </Link>
                            Popular series
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
