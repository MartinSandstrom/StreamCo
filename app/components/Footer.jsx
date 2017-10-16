import React from 'react';
import {render} from 'react-dom';

export default class Footer extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div>
                        <ul className="vertical-list">
                            <li>
                                <span>Home &nbsp;|&nbsp;</span>
                            </li>
                            <li>
                                <span>Terms and conditions &nbsp;|&nbsp;</span>
                            </li>
                            <li>
                                <span>Privacy policy &nbsp;|&nbsp;</span>
                            </li>
                            <li>
                                <span>Collection statement &nbsp;|&nbsp;</span>
                            </li>
                            <li>
                                <span>Help &nbsp;|&nbsp;</span>
                            </li>
                            <li>
                                <span>Manage account</span>
                            </li>
                        </ul>
                    </div>
                    <p>Copyright © 2016 DEMO streaming. All rights reserved.</p>
                    <div className="mt-4">
                        <img className="social-logo" src="./assets/social/facebook-white.svg" alt=""/>
                        <img className="social-logo" src="./assets/social/twitter-white.svg" alt=""/>
                        <img className="social-logo" src="./assets/social/instagram-white.svg" alt=""/>
                    </div>
                </div>
            </footer>
        );
    }
}