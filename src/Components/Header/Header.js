import React from 'react';
import { Container } from 'react-bootstrap';
import logo from '../../img/bos.svg';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import youtube from '../../img/youtube.svg';
import './Header.css';

const Header = () => {
    function activeToggle() {
        document.getElementById('navigation').classList.toggle('menuToggle');
        document.getElementById('hamburger').classList.toggle('backgrounColorToggle');
        document.getElementById('listItems').classList.toggle('show');
        document.getElementById('top').classList.toggle('top');
        document.getElementById('middle').classList.toggle('middle');
        document.getElementById('bottom').classList.toggle('bottom');
    }

    return (
        <>
            <div id="ribbon" className="nominee black right d-lg-block d-none">
                <a href="http://www.northsouth.edu/osa/clubs/nsuac.html" target="_blank" rel="noreferrer"></a>
            </div>
            <header className="grain-bg header-bg">
                <Container>
                    <nav className="navbar navbar-expand-sm navbar-light nav-items py-3">
                        <div className="logo">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo} className="img-fluid" alt="nsuac"/>
                            </a>
                        </div>
                        {/* <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}

                        <div className="navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto text-uppercase">
                                <li className="nav-item d-sm-block d-none">
                                    <a className="nav-link" href="https://www.facebook.com/nsuathleticsclub/" target="_blank" rel="noreferrer">
                                        <img src={facebook} alt="facebook"/>
                                    </a>
                                </li>
                                <li className="nav-item d-sm-block d-none">
                                    <a className="nav-link" href="https://www.youtube.com/c/NSUAthleticsClub/" target="_blank" rel="noreferrer">
                                        <img src={youtube} alt="linkedin"/>
                                    </a>
                                </li>
                                <li className="nav-item d-sm-block d-none">
                                    <a className="nav-link" href="https://www.instagram.com/nsuac_official/" target="_blank" rel="noreferrer">
                                        <img src={instagram} alt="instagram"/>
                                    </a>
                                </li>
                                <li className="nav-item d-sm-block d-none">
                                    <div className="call-to-act pl-3 mt-2">
                                        <a href="#" className="px-5 py-3">
                                            <span> Registration</span>
                                        </a>
                                    </div>
                                </li>

                                <li className="nav-item mr-5">
                                    <button className="toggle-btn" id="hamburger" onClick={activeToggle}>
                                        <svg viewBox="0 0 100 80" width="40" height="40">
                                        <rect width="100" height="10" rx="7" id="top"></rect>
                                        <rect width="100" height="10" rx="7" y="30" id="middle"></rect>
                                        <rect width="100" height="10" rx="7" y="60" id="bottom"></rect>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <nav id="navigation">
                        <ul className="menu hide" id="listItems">
                            <li className="pb-sm-4 pb-4 d-sm-none d-block">
                                    <div className="call-to-act mt-2 text-center">
                                        <a href="#">
                                            <span> Registration</span>
                                        </a>
                                    </div>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <a href="/home" className="navLink reg-24 text-uppercase">Home</a>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <a href="/nsuac" className="navLink reg-24 text-uppercase">nsuac</a>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <a href="/eb-panel" className="navLink reg-24 text-uppercase">Eb Panel</a>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <a href="/schedules" className="navLink reg-24 text-uppercase">Bos</a>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <a href="/top videos" className="navLink reg-24 text-uppercase">Top videos</a>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <a href="/segments" className="navLink reg-24 text-uppercase">Segments</a>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <a href="/media-partners" className="navLink reg-24 text-uppercase">Media Partners</a>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                    <div className="call-to-act mt-2 text-center">
                                        <a href="#">
                                            <span>Join Campus Star</span>
                                        </a>
                                    </div>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>
        </>
    );
};

export default Header;