import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../img/logo.svg';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import linkedin from '../../img/linkedin.svg';
import './Header.css';

const Header = () => {
    return (
        <>
            <header className="grain-bg header-bg fixed-top">
                <Container>
                    <nav className="navbar navbar-expand-md navbar-light nav-items">
                        <div className="logo">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo} className="img-fluid w-50" alt="nsuac"/>
                            </a>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto text-uppercase">
                                <li className="nav-item">
                                    <a className="nav-link" href="#aboutme">
                                        <img src={facebook} alt="facebook"/>
                                    </a>
                                </li>
                                <li className="nav-item mr-10">
                                    <a className="nav-link" href="#portfolio">
                                        <img src={instagram} alt="instagram"/>
                                    </a>
                                </li>
                                <li className="nav-item mr-10">
                                    <a className="nav-link" href="#portfolio">
                                        <img src={linkedin} alt="linkedin"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </Container>
                <hr className="b-dash"/>
                {/* <hr className="t-dash"> */}
            </header>
        </>
    );
};

export default Header;