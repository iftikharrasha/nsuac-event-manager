import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../img/bos.svg';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import youtube from '../../img/youtube.svg';
import './Header.css';

const Header = () => {
    return (
        <>
            <div id="ribbon" className="nominee black right d-lg-block d-none">
                <a href="http://www.northsouth.edu" target="_blank" rel="noreferrer"></a>
            </div>
            <header className="grain-bg header-bg">
                <Container>
                    <nav className="navbar navbar-expand-md navbar-light nav-items py-3">
                        <div className="logo">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo} className="img-fluid w-75" alt="nsuac"/>
                            </a>
                        </div>
                        <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto text-uppercase">
                                <li className="nav-item">
                                    <a className="nav-link" href="https://www.facebook.com/nsuathleticsclub/" target="_blank" rel="noreferrer">
                                        <img src={facebook} alt="facebook"/>
                                    </a>
                                </li>
                                <li className="nav-item mr-10">
                                    <a className="nav-link" href="https://www.youtube.com/c/NSUAthleticsClub/" target="_blank" rel="noreferrer">
                                        <img src={youtube} alt="linkedin"/>
                                    </a>
                                </li>
                                <li className="nav-item mr-10">
                                    <a className="nav-link" href="https://www.instagram.com/nsuac_official/" target="_blank" rel="noreferrer">
                                        <img src={instagram} alt="instagram"/>
                                    </a>
                                </li>
                                <li className="nav-item mr-10">
                                    <div className="call-to-act pl-3 mt-2">
                                        <a href="#" className="px-5 py-3">
                                            <span> Registration</span>
                                        </a>
                                    </div>
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