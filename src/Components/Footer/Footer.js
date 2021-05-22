import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <section className="grain-bg newsletter">
                <Container>
                    <Row>
                        <Col sm={5} className="d-flex align-items-center justify-content-center">
                            <div>
                                <h3 className="c_title n_title">Battle of Skills 2021</h3>
                                <p>
                                    North South University Athletics Club (NSUAC) is going to organize a three-day long Skill showing event for from 1st June, 2021 to 3rd June, 2021.
                                </p>
                            </div>
                        </Col>
                        <Col sm={7} className="d-flex align-items-center justify-content-center">
                                <div className="call-to-act call-icon">
                                    <a href="#" target="_blank" className="pt-3">
                                            <i className="fab fa-facebook-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" target="_blank" className="pt-3">
                                            <i className="fab fa-twitter-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" target="_blank" className="pt-3">
                                            <i className="fab fa-pinterest-square" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" target="_blank" className="pt-3">
                                            <i className="fab fa-github-square" aria-hidden="true"></i>
                                    </a>
                                </div>
                           
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Footer;