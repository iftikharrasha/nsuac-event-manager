import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container } from 'react-bootstrap';
import facebook from '../../img/facebook.svg';
import instagram from '../../img/instagram.svg';
import youtube from '../../img/youtube.svg';
import { Link, animateScroll as scroll } from "react-scroll";
import Brand from '../Brand/Brand';
import CampusStarBtn from '../CampusStarBtn/CampusStarBtn';
import RegModal from '../RegModal/RegModal';

const Header = (props) => {
    const display = props;
    
    function activeToggle() {
        document.getElementById('navigation').classList.toggle('menuToggle');
        document.getElementById('hamburger').classList.toggle('backgrounColorToggle');
        document.getElementById('listItems').classList.toggle('show');
        document.getElementById('top').classList.toggle('top');
        document.getElementById('middle').classList.toggle('middle');
        document.getElementById('bottom').classList.toggle('bottom');
    }

    //login modal
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function openModalMobile(isOpen) {
        document.getElementById('navigation').classList.toggle('menuToggle');
        document.getElementById('hamburger').classList.toggle('backgrounColorToggle');
        document.getElementById('listItems').classList.toggle('show');
        document.getElementById('top').classList.toggle('top');
        document.getElementById('middle').classList.toggle('middle');
        document.getElementById('bottom').classList.toggle('bottom');
        setIsOpen(true);
    }

    return (
        <>
            {/* <div id="ribbon" className="nominee black right d-lg-block d-none">
                <a href="http://www.northsouth.edu/osa/clubs/nsuac.html" target="_blank" rel="noreferrer"></a>
            </div> */}
            <div className="latest">
                <div class="ticker">
                    <div class="title"><h5>Latest News</h5></div>
                    <div class="news">
                        <marquee>
                            <p className="mb-0">
                                <span>Campus Star registration is going on!</span>
                                <span>|</span>
                                <span>Battle of Skills: Stay Tuned!</span>
                                <span>|</span>
                                <span>Campus Star registration is going on!</span>
                                <span>|</span>
                                <span>Battle of Skills: Stay Tuned!</span>
                                <span>|</span>
                                <span>Campus Star registration is going on!</span>
                                <span>|</span>
                                <span>Battle of Skills: Stay Tuned!</span>
                            </p>
                        </marquee>
                    </div>
                </div>
            </div>
            <header className="header-bg">
                <Container>
                    <nav className="navbar navbar-expand-sm navbar-light nav-items py-3">
                        <div className="logo">
                            <Brand></Brand>
                        </div>
                        {/* <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}

                        <div className="navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto text-uppercase">
                                <li className="nav-item d-sm-block d-none">
                                    <a className="nav-link" href="https://www.facebook.com/nsuathleticsclub/" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" src={facebook} alt="facebook"/>
                                    </a>
                                </li>
                                <li className="nav-item d-sm-block d-none">
                                    <a className="nav-link" href="https://www.youtube.com/c/NSUAthleticsClub/" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" src={youtube} alt="linkedin"/>
                                    </a>
                                </li>
                                <li className="nav-item d-sm-block d-none">
                                    <a className="nav-link" href="https://www.instagram.com/nsuac_official/" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" src={instagram} alt="instagram"/>
                                    </a>
                                </li>
                                <li className="nav-item d-sm-block d-none">
                                    <div className="call-to-act pl-3 mt-2">
                                        <a href="#" className="px-5 py-3" onClick={openModal}>
                                            <span> Registration</span>
                                        </a>
                                    </div>
                                </li>

                                <li className="nav-item mr-5">
                                    <button className="toggle-btn" id="hamburger" onClick={activeToggle} style={display}>
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

                    <nav id="navigation" style={display}>
                        <ul className="menu hide" id="listItems">
                            <li className="pb-sm-4 pb-3">
                                <Link to="home" className="navLink reg-24 text-uppercase" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="nsuac" className="navLink reg-24 text-uppercase" spy={true} smooth={true} offset={-70} duration={500}>NSUAC</Link>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="star" className="navLink reg-24 text-uppercase" spy={true} smooth={true} offset={-70} duration={500}>Campus Star</Link>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="greetings" className="navLink reg-24 text-uppercase" spy={true} smooth={true} offset={-70} duration={500}>Greetings</Link>
                            </li>
                            {/* <li className="pb-sm-4 pb-3">
                                <Link to="schedules" className="navLink reg-24 text-uppercase" spy={true} smooth={true} offset={-70} duration={500}>Battle of Skills</Link>
                            </li> */}
                            {/* <li className="pb-sm-4 pb-3">
                                <Link to="topVideos" className="navLink reg-24 text-uppercase" spy={true} smooth={true} offset={-70} duration={500}>Top videos</Link>
                            </li>
                            <li className="pb-sm-4 pb-3">
                                <Link to="segments" className="navLink reg-24 text-uppercase" spy={true} smooth={true} offset={-70} duration={500}>Segments</Link>
                            </li> */}
                            {/* <li className="pb-sm-4 pb-3">
                                <Link to="mediaPartners" className="navLink reg-24 text-uppercase" spy={true} smooth={true} offset={-70} duration={500}>Media Partners</Link>
                            </li> */}
                            {/* <li className="pb-sm-4 pb-3">
                                    <div className="call-to-act mt-2 text-sm-center">
                                        <CampusStarBtn></CampusStarBtn>
                                    </div>
                            </li> */}
                            <li className="pt-sm-4 pt-4 d-sm-none d-block">
                                <div className="call-to-act mb-4 text-sm-center">
                                    <a href="#" onClick={openModalMobile}>
                                        <span> Registration</span>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>
            <RegModal modalIsOpen={modalIsOpen} closeModal={closeModal}></RegModal>
        </>
    );
};

export default Header;