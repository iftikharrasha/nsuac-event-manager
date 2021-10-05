import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './Registration.css';

const Registration = () => {
    return (
        <>
            <section className="joinNow d-flex align-items-center mt-50" id="reg">
                    <Container>
                        <Row>
                            <Col lg={9} className="d-flex align-items-center">
                                <h2 className="medi-40">
                                    <span className="c-tag-2">
                                        Unleash your sports skill!
                                    </span>
                                </h2>
                            </Col>
                            <Col lg={3} className="d-flex align-items-center mt-lg-0 mt-5">
                                <div className="call-to-act">
                                    {/* <Link to="/campus-star/en" className="px-5 py-3">
                                        <span> Register Now! </span>
                                    </Link> */}
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdmICFGntzh3y68Prx9ioH62UipHEO5yLewxdXJEnqLxnTpMQ/viewform" target="_blank" rel="noreferrer" className="pl-3 px-5 py-3">
                                        <span>Register Now!</span>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </section>
        </>
    );
};

export default Registration;

