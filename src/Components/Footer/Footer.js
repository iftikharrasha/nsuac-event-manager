import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../img/bos.svg';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <section className="grain-bg footer">
                <Container>
                    <Row>
                        <Col lg={5} className="d-flex align-items-center justify-content-center">
                            <div className="">
                                <h3>
                                    <img src={logo} className="img-fluid w-25" alt="bos-footer"/>
                                    Battle of Skills 2021</h3>
                                <p>
                                    North South University Athletics Club (NSUAC) is going to organize a three-day long Skill showing event for from 1st June, 2021 to 3rd June, 2021.
                                </p>
                            </div>
                        </Col>
                        <Col lg={7} className="d-flex align-items-center justify-content-center">
                                <div className="call-to-act call-icon">
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
                                <h4 className="c-tag-3">Faculty Advisor</h4>
                                <ul>
                                        <li>
                                            <a href="#">Mehedi Hasan</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3">President</h4>
                                <ul>
                                        <li>
                                            <a href="#">Hridoy Alom</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3">Vice President</h4>
                                <ul>
                                        <li>
                                            <a href="#">Ramisa Anjuman</a>
                                        </li>
                                        <li>
                                            <a href="#">Sahhad Hossain</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3">General Secretary</h4>
                                <ul>
                                        <li>
                                            <a href="#">Rahul Halder</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3">Treasurer</h4>
                                <ul>
                                        <li>
                                            <a href="#">Shafiq Topu</a>
                                        </li>
                                </ul>
                            </div>
                            <div className="roles-details">
                                <h4 className="c-tag-3">Join Secretary</h4>
                                <ul>
                                        <li>
                                            <a href="#">Jahid Hasan Alvi</a>
                                        </li>
                                        <li>
                                            <a href="#">Hussainur Rahman</a>
                                        </li>
                                </ul>
                            </div>
                    </nav>
                    <div className="footer-rights">
                        <div className="footer-copyright">
                            <span className="c-tag-3">© All Rights Reserved | NSU Athletics Club</span>
                        </div>
                        <div className="footer-rights-link">
                            <ul>
                                <li>
                                    <a href="#" className="c-tag-3">North South University</a>
                                </li>
                                <li>
                                    <a href="#" className="c-tag-3">BOS Registration</a>
                                </li>
                                <li>
                                    <a href="#" className="c-tag-3">Campus Star</a>
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