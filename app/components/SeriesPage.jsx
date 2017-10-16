import React from 'react';
import {render} from 'react-dom';
import DataService from '../dataService.js';
import Product from './Product.jsx';
import SubNavBar from './SubNavBar.jsx';

export default class SeriesPage extends React.Component {

    constructor() {
        super()
        this.state = {
            series: []
        }
    }

    componentDidMount = () => {
        let series = DataService.getData('series', 21, 2010);
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
            <div>
                <SubNavBar title="Popular series"></SubNavBar>
                <div className="container">
                    <div className="row ">
                        {this.renderSeries()}
                    </div>
                </div>
            </div>
        );
    }
}
