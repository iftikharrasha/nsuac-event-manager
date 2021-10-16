import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import logo from '../../img/bos.svg';

const Footer = () => {
    return (
        <>
            <footer className="grain-bg footer bg-tag-2">
                <Container>
                    <Row>
                        <Col lg={5} className="d-flex align-items-center justify-content-center">
                            <div className="">
                                <h3 className="semi-28">
                                    <img src={logo} className="img-fluid w-25" alt="bos-footer"/>
                                    Battle of Skills 2021</h3>
                                <p className="lit-18">
                                    North South University Athletics Club (NSUAC) is going to organize a 21-days long Skill showing event starting from 3rd October, 2021 to 23rd October, 2021.
                                </p>
                            </div>
                        </Col>
                        <Col lg={7} className="d-flex align-items-center justify-content-center">
                                <div className="call-to-act">
                                    <a href="https://www.facebook.com/nsuathleticsclub/" target="_blank" rel="noreferrer" className="pt-3">
                                        <i className="fab fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.youtube.com/c/NSUAthleticsClub/" target="_blank" rel="noreferrer" className="pt-3">
                                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.instagram.com/nsuac_official/" target="_blank" rel="noreferrer" className="pt-3">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/north-south-university-athletics-club/" target="_blank" rel="noreferrer" className="pt-3">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://twitter.com/nsuac_official/" target="_blank" rel="noreferrer" className="pt-3">
                                        <i className="fa fa-twitter" aria-hidden="true"></i>
                                    </a>
                                </div>
                        </Col>
                    </Row>
                    <nav className="roles">
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">Faculty Advisor</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="http://www.northsouth.edu/faculty-members/shss/eml/mehedi.hasan.html?fbclid=IwAR19jt7qtXHDTYz-AsROmgYoRh2WGq6skWJDNs4EUzLPzT9d7DDgSv2QX9g" target="_blank" rel="noreferrer">Mehedi Hasan</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">President</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="https://www.linkedin.com/in/hridoyalam/?fbclid=IwAR1xdmWzM1H-Hn-cABp8r5nkmaGNVRXnYyr58P3M4N4LuPWvS2aDBZhjHrI" target="_blank" rel="noreferrer">Hridoy Alam</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">Vice President</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="https://www.facebook.com/sajjad.hossen.3958" target="_blank" rel="noreferrer">Sajjad Hossain</a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/ramisa-anjuman-233083219/?fbclid=IwAR1wiiNWgDnT4ulX4GtfbtysmNlat1ZdM5k60m2tB80oxl28vW2ie8vJ7BE" target="_blank" rel="noreferrer">Ramisa Anjuman</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">General Secretary</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="https://www.linkedin.com/in/rahul-halder-b19a5a209/?fbclid=IwAR0QqVRWEr9Uaq7M22SqdHYeWSu4fFZ1uDUuw9JciLw2KFD-fyuiLCDwV4M" target="_blank" rel="noreferrer">Rahul Halder</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">Treasurer</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="https://www.linkedin.com/in/shafiq-topu-38a12420a/?fbclid=IwAR0jotTXA24U4pP2lCFkkyqyIGIOzyyPRWQ_50900IFaYgRp0g-9Vb0lXQI" target="_blank" rel="noreferrer">Shafiq Topu</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">Join Secretary</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="https://www.linkedin.com/in/jahidhasanalvi" target="_blank" rel="noreferrer">Jahid Hasan Alvi</a>
                                        </li>
                                </ul>
                            </div>
                    </nav>
                    <div className="footer-rights mt-5">
                        <div className="footer-copyright">
                            <span className="c-tag-4 medi-14">© All Rights Reserved | NSU Athletics Club</span>
                        </div>
                        <div className="footer-rights-link">
                            <ul>
                                <li>
                                    <a href="http://www.northsouth.edu/" className="c-tag-4 medi-14" target="_blank" rel="noreferrer">North South University</a>
                                </li>
                                <li>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdmICFGntzh3y68Prx9ioH62UipHEO5yLewxdXJEnqLxnTpMQ/viewform" className="c-tag-4 medi-14" target="_blank" rel="noreferrer">BBS'21 Registration</a>
                                </li>
                                <li>
                                    <Link to="/campus-star/en" className="c-tag-4 medi-14">Campus Star</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    );
};

export default Footer;