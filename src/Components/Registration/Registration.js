import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Registration.css';

const Registration = () => {
    return (
        <>
            <section className="joinNow d-flex align-items-center" id="star">
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
                                    <a href="#" className="px-5 py-3" target="_blank">
                                        <span> Join Now </span>
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

