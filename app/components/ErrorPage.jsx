import React from 'react';
import {render} from 'react-dom';
import SubNavBar from './SubNavBar.jsx';

export default class MoviePage extends React.Component {

    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <SubNavBar title="Popular titles"></SubNavBar>
                <div className="container">
                    Oops something went wrong...
                </div>
            </div>
        );
    }
}
