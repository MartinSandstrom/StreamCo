import React from 'react';
import {render} from 'react-dom';

export default class Footer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <div>
                        <ul className="vertical-list">
                            <li>
                                <span>Home
                                    <span className="footer-list-devider">&nbsp;|&nbsp;</span>
                                </span>
                            </li>
                            <li>
                                <span>Terms and conditions
                                    <span className="footer-list-devider">&nbsp;|&nbsp;</span>
                                </span>
                            </li>
                            <li>
                                <span>Privacy policy
                                    <span className="footer-list-devider">&nbsp;|&nbsp;</span>
                                </span>
                            </li>
                            <li>
                                <span>Collection statement
                                    <span className="footer-list-devider">&nbsp;|&nbsp;</span>
                                </span>
                            </li>
                            <li>
                                <span>Help
                                    <span className="footer-list-devider">&nbsp;|&nbsp;</span>
                                </span>
                            </li>
                            <li>
                                <span>Manage account</span>
                            </li>
                        </ul>
                    </div>
                    <p>Copyright © 2016 DEMO streaming. All rights reserved.</p>
                    <div className="mt-4">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="social-logo" src="./assets/social/facebook-white.svg" alt=""/>
                                <img className="social-logo" src="./assets/social/twitter-white.svg" alt=""/>
                                <img className="social-logo" src="./assets/social/instagram-white.svg" alt=""/>
                            </div>
                            <div className="col-md-5">
                                <img className="store-logo" src="./assets/store/windows-store.svg" alt=""/>
                                <img className="store-logo" src="./assets/store/play-store.svg" alt=""/>
                                <img className="store-logo" src="./assets/store/app-store.svg" alt=""/>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}
