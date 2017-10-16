import React from 'react';
import {render} from 'react-dom';
import DataService from '../dataService.js';
import Product from './Product.jsx';
import SubNavBar from './SubNavBar.jsx';

export default class SeriesPage extends React.Component {

    constructor() {
        super()
        this.state = {
            series: [],
            isLoading: false
        }
    }

    componentDidMount = () => {
        this.setState({isLoading: true})
        let series = DataService.getData('series', 21, 2010);
        this.setState({series, isLoading: false});
    }

    renderSeries = () => {
        let series = this.state.series.map((serie, key) => (
            <Product key={key} imageUrl={serie.images['Poster Art'].url} title={serie.title}></Product>
        ));
        return series;
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
                <SubNavBar title="Popular series"></SubNavBar>
                <div className="container">
                    <div className="row ">
                        {this.renderLoader()}
                        {this.renderSeries()}
                    </div>
                </div>
            </div>
        );
    }
}
