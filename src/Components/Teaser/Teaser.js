import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Teaser = () => {
    return (
        <>
            <section className="teaser mt-100" id="teaser">
                <Container className="c_custom">
                    <Row className="py-5 px-lg-0 px-sm-5 px-3 justify-content-center">
                        <Col lg={8}>
                            <div className="teaser-video">
                                <iframe id="youtube" src="https://www.youtube.com/embed/TOmDcKiNJy8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Teaser;