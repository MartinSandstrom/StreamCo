import React from 'react';
import {render} from 'react-dom';
import {Switch, BrowserRouter, Route, Link} from 'react-router-dom'
import MovieComponent from './components/MovieComponent.jsx';
import SeriesComponent from './components/SeriesComponent.jsx';
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
                            <Route path="/movies" component={MovieComponent}/>
                            <Route path="/series" component={SeriesComponent}/>
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
