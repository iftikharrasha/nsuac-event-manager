import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import greetings from '../../img/greetings.jpg';

const Greetings = () => {
    return (
        <>
             <section className="video mt-200" id="greetings">
                <Container className="c_custom">
                    <Row className="py-5 px-lg-0 px-sm-5 px-3">
                        <Col lg={6} className="offset-md-2 offset-into">
                            <div className="intro-video">
                                <img src={greetings} alt="greetings" className="img-fluid"/>
                            </div>
                        </Col>
                        <Col lg={4} className="pt-5 d-flex align-items-center">
                            <div className="achieve-text">
                                <h2 className="medi-40">
                                    <span className="c-tag-2">
                                        Imrul Hassan <mark className="mark c-tag-3">Sir</mark>
                                    </span>
                                </h2>
                                <p className="c-tag-2 py-5 lit-16">We would like to exaggerate our sincere thanks to Imrul Hassan, President of Bashundhara Kings for investing on our vision. We think of him as a part of our NSUAC family. Thank you sir for being with us on the road to a better future.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Greetings;