import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router-dom';
import SubNavBar from './SubNavBar.jsx';

export default class OverviewPage extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <div>
                <SubNavBar title="Popular titles"></SubNavBar>
                <div className="container">
                    <div className="col-sm-4 col-lg-2 d-flex align-items-stretch mb-3">
                        <div className="card">
                            <img className="img-fluid" src={this.props.imageUrl} alt={'image url'}/>
                            <div className="card-body">
                                <Link to="/movies">Movies</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 col-lg-2 d-flex align-items-stretch mb-3">
                        <div className="card">
                            <img className="img-fluid" src="assets/placeholder.png" alt="image url"/>
                            <div className="card-body">
                                <Link to="/series">Series</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
