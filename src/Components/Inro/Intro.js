import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Intro.css';

const Intro = () => {
    return (
        <>
            <section className="video mt-200">
                <Container className="c_custom">
                    <Row className="py-5">
                        <Col lg={6} className="offset-md-2 offset-into">
                            <div className="intro-video">
                                <iframe width="100%" height="409" src="https://www.youtube.com/embed/PxuKDYNxRF8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Col>
                        <Col lg={4} className="pt-5 d-flex align-items-center">
                            <div className="achieve-text">
                                <h2>
                                    <span className="c-tag-2">
                                        Event <mark className="mark c-tag-3">Teaser</mark>
                                    </span>
                                </h2>
                                <p className="c-tag-2 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam et minima consequatur excepturi accusamus possimus ullam vel eveniet sit culpa. Lorem ipsum dolor sit, amet consectetur Lorem ipsum dolor sit amet. adipisicing elit. Neque, possimus ducimus expedita voluptas rem doloremque! Minus saepe est nemo corporis natus provident nulla ex sint.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Intro;