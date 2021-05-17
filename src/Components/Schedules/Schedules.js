import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Schedules.css';

const Schedules = () => {
    return (
        <>
            <section className="programs pt-200 pb-200">
                <Container>
                    <Row className="mb-5">
                        <Col lg={12}>
                            <h2>
                                <span className="c-tag-1">
                                    Time <mark className="mark ">Schedules</mark>
                                </span>
                            </h2>
                        </Col>
                        <Col lg={8} className="offset-lg-4 mt-5 pl-lg-5 c-tag-1">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero repudiandae atque quam!
                            </p>
                        </Col>
                    </Row>
                    <Row className="align-items-stretch program">
                        <Col sm={12} className="border-top border-bottom py-5">
                            <Row className="align-items-stretch">
                                <Col md={3} className="mb-3 mb-md-0 c-tag-1">
                                    <span className="h4">May 29</span> 
                                    <p>8:00AM</p>
                                </Col>
                                <Col md={9} className="c-tag-1">
                                    <h2>Event Opener</h2>
                                    <span>NSU Auditorium</span>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="border-top border-bottom py-5">
                            <Row className="align-items-stretch">
                                <Col md={3} className="mb-3 mb-md-0 c-tag-1">
                                    <span className="h4">May 30</span> 
                                    <p>8:00AM</p>
                                </Col>
                                <Col md={9} className="c-tag-1">
                                    <h2>Online Chess Game</h2>
                                    <span>NAC991</span>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="border-top border-bottom py-5">
                            <Row className="align-items-stretch">
                                <Col md={3} className="mb-3 mb-md-0 c-tag-1">
                                    <span className="h4">May 31</span> 
                                    <p>8:00AM</p>
                                </Col>
                                <Col md={9} className="c-tag-1">
                                    <h2>Price Giving Ceremony</h2>
                                    <span>NAC501</span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Schedules;