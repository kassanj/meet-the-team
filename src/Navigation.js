import React from "react";
import { Link, withRouter } from "react-router-dom";
import './Navigation.css';
import './fonts/HKGrotesk/HKGrotesk-Bold.otf';

const Navigation = (props) => {
    return (
        <div className="navigation mt-3">
            <nav className="navbar navbar-expand">
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className='nav-item'>
                            <div class="nav-link browse-text">
                                Browse by:
                            </div>
                        </li>
                        <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                            <Link class="nav-link" to="/">
                                Pod
                            </Link>
                        </li>

                        <li className={`nav-item  ${props.location.pathname === "/list" ? "active" : ""}`}>
                            <Link className="nav-link" to="/list">
                                Skills and Interests
                            </Link>
                        </li>
                        <li className={`nav-item  ${props.location.pathname === "/map" ? "active" : ""}`}>
                            <Link className="nav-link" to="/map">
                                Location
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
}

export default withRouter(Navigation);