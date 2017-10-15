import React from 'react';
import {render} from 'react-dom';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom'
import MoviePage from './components/MoviePage.jsx';
import SeriesPage from './components/SeriesPage.jsx';
import OverviewComponent from './components/OverviewComponent.jsx';

class Application extends React.Component {
    constructor() {
        super()
        this.state = {
            parsedData: {}
        }
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse bg-primary">
                    <a href="/" className="navbar-brand">StreamingCo</a>
                </nav>
                <div className="container">
                    <BrowserRouter>
                        <Switch>
                            <Route path="/movies" component={MoviePage}/>
                            <Route path="/series" component={SeriesPage}/>
                            <Route path="/" component={OverviewComponent}/>
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

render(
    <Application/>, document.getElementById('app'));
