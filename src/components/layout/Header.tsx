import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCoffee } from "@fortawesome/free-solid-svg-icons";

function Header(props: any) {

    const { onOpen } = props;

    const toggleDrawer = () => {
        onOpen();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button
                    className="navbar-toggler text-white"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleDrawer}
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName={"active-nav-link"} exact className="nav-link" href="#">
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/filter" className="nav-link" href="#">
                                Team
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center">

                    <a
                        className="text-reset me-3 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                    >   
                        <FontAwesomeIcon icon={faCoffee} />
                    </a>
                   
                </div>
            </div>
        </nav>
    );
}

export default Header;
