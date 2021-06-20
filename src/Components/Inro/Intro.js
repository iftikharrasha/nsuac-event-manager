import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Intro.css';

const Intro = () => {
    return (
        <>
            <section className="video mt-200" id="ebPanel">
                <Container className="c_custom">
                    <Row className="py-5">
                        <Col lg={6} className="offset-md-2 offset-into">
                            <div className="intro-video">
                                <iframe id="youtube" width="100%" height="409" src="https://www.youtube.com/embed/wLVswSN4JmU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Col>
                        <Col lg={4} className="pt-5 d-flex align-items-center">
                            <div className="achieve-text">
                                <h2>
                                    <span className="c-tag-2">
                                    EB Panel <mark className="mark c-tag-3">2020-21</mark>
                                    </span>
                                </h2>
                                <p className="c-tag-2 py-5">We are extremely delighted to welcome our new executive panel for the next year, with young, fresh, talented, and smartest minds. Their contributions and dedication towards the club have been unparalleled to any others, with visions to contribute the maximum for the club, upholding the flag of success and continuing its legacy, and carrying it even further.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Intro;