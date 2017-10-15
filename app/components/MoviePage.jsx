import React from 'react';
import {render} from 'react-dom';
import DataService from '../dataService.js';
import Product from './ProductComponent.jsx';

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
        let movies = this.state.movies.map((movie, key) => (
            <Product key={key} imageUrl={movie.images['Poster Art'].url} title={movie.title}></Product>
        ));
        return movies;
    }

    render() {
        return (
            <div className="row">
                {this.renderMovies()}
            </div>
        );
    }
}
