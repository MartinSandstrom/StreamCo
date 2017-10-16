import React from 'react';
import {render} from 'react-dom';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom'
import MoviePage from './MoviePage.jsx';
import SeriesPage from './SeriesPage.jsx';
import OverviewPage from './OverviewPage.jsx';
import ErrorPage from './ErrorPage.jsx';

export default class Content extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <section className="content">
                <BrowserRouter>
                    <Switch>
                        <Route path="/movies" component={MoviePage}/>
                        <Route path="/series" component={SeriesPage}/>
                        <Route path="/error" component={ErrorPage}/>
                        <Route path="/" component={OverviewPage}/>
                    </Switch>
                </BrowserRouter>
            </section>
        );
    }
}
