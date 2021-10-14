import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand">
                <div>
                    <ul class="navbar-nav ml-auto">
                        <li class={`nav-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                            <Link class="nav-link" to="/">
                                Home
                            </Link>
                        </li>

                        <li class={`nav-item  ${props.location.pathname === "/list" ? "active" : ""}`}>
                            <Link class="nav-link" to="/list">
                                List
                            </Link>
                        </li>
                        <li class={`nav-item  ${props.location.pathname === "/map" ? "active" : ""}`}>
                            <Link class="nav-link" to="/map">
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