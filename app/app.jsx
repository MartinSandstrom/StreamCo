import React from 'react';
import {render} from 'react-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Content from './components/Content.jsx';

class Application extends React.Component {
    constructor() {
        super()
        this.state = {
            parsedData: {}
        }
    }

    render() {
        return (
            <div className="wrapper">
                <Header></Header>
                <Content></Content>
                <Footer></Footer>
            </div>
        );
    }
}

render(
    <Application/>, document.getElementById('app'));
