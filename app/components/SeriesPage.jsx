import React from 'react';
import {render} from 'react-dom';
import DataService from '../dataService.js';
import Product from './ProductComponent.jsx';

export default class SeriesComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            series: []
        }
    }

    componentDidMount = () => {
        let series = DataService.getData('series');
        this.setState({series});
    }

    renderSeries = () => {
        let series = this.state.series.map((serie, key) => (
            <Product key={key} imageUrl={serie.images['Poster Art'].url} title={serie.title}></Product>
        ));
        return series;
    }

    render() {
        return (
            <div className="row">
                {this.renderSeries()}
            </div>
        );
    }
}
