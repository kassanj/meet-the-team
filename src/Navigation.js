import React from "react";
import { Link, withRouter } from "react-router-dom";
import './Navigation.css';

const Navigation = (props) => {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand">
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                            <Link class="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li className={`nav-item  ${props.location.pathname === "/list" ? "active" : ""}`}>
                            <Link className="nav-link" to="/list">
                                Directory
                            </Link>
                        </li>
                        <li className={`nav-item  ${props.location.pathname === "/map" ? "active" : ""}`}>
                            <Link className="nav-link" to="/map">
                                Map
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    );
}

export default withRouter(Navigation);