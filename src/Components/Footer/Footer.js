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
            <section className="grain-bg footer bg-tag-2">
                <Container>
                    <Row>
                        <Col lg={5} className="d-flex align-items-center justify-content-center">
                            <div className="">
                                <h3 className="semi-28">
                                    <img src={logo} className="img-fluid w-25" alt="bos-footer"/>
                                    Battle of Skills 2021</h3>
                                <p className="lit-18">
                                    North South University Athletics Club (NSUAC) is going to organize a three-day long Skill showing event for from 1st June, 2021 to 3rd June, 2021.
                                </p>
                            </div>
                        </Col>
                        <Col lg={7} className="d-flex align-items-center justify-content-center">
                                <div className="call-to-act">
                                    <a href="https://www.facebook.com/nsuathleticsclub/" target="_blank" className="pt-3">
                                        <i className="fab fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.youtube.com/c/NSUAthleticsClub" target="_blank" className="pt-3">
                                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.instagram.com/nsuac_official/" target="_blank" className="pt-3">
                                        <i className="fa fa-instagram" aria-hidden="true"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/north-south-university-athletics-club/" target="_blank" className="pt-3">
                                        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                    </a>
                                </div>
                        </Col>
                    </Row>
                    <nav className="roles">
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">Faculty Advisor</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="#">Mehedi Hasan</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">President</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="#">Hridoy Alom</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">Vice President</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="#">Ramisa Anjuman</a>
                                        </li>
                                        <li>
                                            <a href="#">Sahhad Hossain</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">General Secretary</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="#">Rahul Halder</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">Treasurer</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="#">Shafiq Topu</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3 lit-18">Join Secretary</h4>
                                <ul className="lit-16">
                                        <li>
                                            <a href="#">Jahid Hasan Alvi</a>
                                        </li>
                                        <li>
                                            <a href="#">Hussainur Rahman</a>
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
                                    <a href="#" className="c-tag-4 medi-14">North South University</a>
                                </li>
                                <li>
                                    <a href="#" className="c-tag-4 medi-14">BOS Registration</a>
                                </li>
                                <li>
                                    <Link to="/campus-star/en" className="c-tag-4 medi-14">Campus Star</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Footer;