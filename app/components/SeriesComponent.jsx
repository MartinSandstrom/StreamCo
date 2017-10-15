import React from 'react';
import {render} from 'react-dom';
import DataService from '../dataService.js';

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
            <h1 key={key}>{serie.title}</h1>
        ));
        return series;
    }

    render() {
        return (
            <div>
                {this.renderSeries()}
            </div>
        );
    }
}
