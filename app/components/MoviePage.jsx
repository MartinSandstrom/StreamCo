import React from 'react';
import {render} from 'react-dom';
import DataService from '../dataService.js';
import Product from './Product.jsx';
import SubNavBar from './SubNavBar.jsx';

export default class MoviePage extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            isLoading: false
        }
    }

    componentDidMount = () => {
        let movies = DataService.getData('movie', 21, 2010);
        this.setState({movies});
    }

    renderMovies = () => {
        let movies = this.state.movies.map((movie, key) => (
            <Product key={key} imageUrl={movie.images['Poster Art'].url} title={movie.title}></Product>
        ));
        return movies;
    }

    renderLoader = () => {
        if (this.state.isLoading) {
            return (
                <p>Loading...</p>
            );
        }
    }

    render() {
        return (
            <div>
                <SubNavBar title="Popular movies"></SubNavBar>
                <div className="container">
                    <div className="row ">
                        {this.renderLoader()}
                        {this.renderMovies()}
                    </div>
                </div>
            </div>
        );
    }
}
