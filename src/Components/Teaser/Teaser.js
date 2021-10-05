import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Teaser = () => {
    return (
        <>
            <section className="teaser mt-100" id="teaser">
                <Container className="c_custom">
                    <Row className="py-5 px-lg-0 px-sm-5 px-3 justify-content-center">
                        <Col lg={6}>
                            <div className="teaser-video" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">
                                <iframe id="youtube" src="https://www.youtube.com/embed/TOmDcKiNJy8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Col>
                        <Col lg={6} className="mt-lg-0 mt-5">
                            <div className="teaser-video" data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000">
                                <iframe id="youtube" src="https://www.youtube.com/embed/_3ZwkXC8Nt0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                    <Row className="px-lg-0 px-sm-5 px-3 justify-content-center">
                        <Col lg={12}>
                            <div className="call-to-act my-5 text-sm-center">
                                <a href="https://www.youtube.com/playlist?list=PLdHtGlNILI6g9DZBQv3mxlz2i8fIYdWYK" target="_blank" rel="noreferrer" className="pl-3 px-5 py-3">
                                    <span>WATCH THE LATEST OF BBS'21</span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Teaser;