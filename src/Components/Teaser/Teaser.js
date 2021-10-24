import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

const Teaser = () => {
    return (
        <>
            <section className="teaser mt-100" id="teaser">
                <Container className="c_custom">
                    <Row className="py-5 px-lg-0 px-sm-5 px-3 justify-content-center">
                        <Col lg={6}>
                            <div className="teaser-video" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">
                                <iframe id="youtube" src="https://www.youtube.com/embed/oClO5_QIW_A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Col>
                        <Col lg={6} className="mt-lg-0 mt-5">
                            <div className="teaser-video" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000">
                                <iframe id="youtube" src="https://www.youtube.com/embed/cM9ZTlCBaFk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Col>
                        <Col lg={6} className="mt-lg-3 mt-5">
                            <div className="teaser-video" data-aos="zoom-in" data-aos-delay="1200" data-aos-duration="1000">
                                <iframe id="youtube" src="https://www.youtube.com/embed/2vL-mDGe2QE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Col>
                        <Col lg={6} className="mt-lg-3 mt-5">
                            <div className="teaser-video" data-aos="zoom-in" data-aos-delay="1400" data-aos-duration="1000">
                                <iframe id="youtube" src="https://www.youtube.com/embed/sJOGcAJCOEQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                    <Row className="px-lg-0 px-sm-5 px-3 justify-content-center">
                        <Col lg={12}>
                            <div className="call-to-act mb-5 text-sm-center">
                                <Link to="/media-coverage">
                                    <span>MEDIA COVERAGE of BBS'21</span>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Teaser;