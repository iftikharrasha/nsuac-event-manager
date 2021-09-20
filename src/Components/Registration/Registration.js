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
            <section className="joinNow d-flex align-items-center mt-50" id="star">
                    <Container>
                        <Row>
                            <Col lg={9} className="d-flex align-items-center">
                                <h2 className="medi-40">
                                    <span className="c-tag-2">
                                        Join as a campus Star!
                                    </span>
                                </h2>
                            </Col>
                            <Col lg={3} className="d-flex align-items-center mt-lg-0 mt-5">
                                <div className="call-to-act">
                                    <Link to="/campus-star/en" className="px-5 py-3">
                                        <span> Join Now </span>
                                    </Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
            </section>
        </>
    );
};

export default Registration;

