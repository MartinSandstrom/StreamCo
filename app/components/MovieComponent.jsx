import React from 'react';
import {render} from 'react-dom';
import DataService from '../dataService.js';

export default class MovieComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }

    componentDidMount = () => {
        let movies = DataService.getData('movie');
        this.setState({movies});
    }

    renderMovies = () => {
        console.log(this.state.movies);
        let movies = this.state.movies.map((movies, key) => (
            <h1 key={key}>{movies.title}</h1>
        ));
        return movies;
    }

    render() {
        return (
            <div>
                {this.renderMovies()}
            </div>
        );
    }
}
