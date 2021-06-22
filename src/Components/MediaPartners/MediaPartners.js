import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import yamaha from '../../img/yamaha.png';
import kings from '../../img/kings.png';
import polar from '../../img/polar.png';
import dhoni from '../../img/dhoni.png';
import './MediaPartners.css';

const MediaPartners = () => {
    return (
        <>
            <section className="partners pt-200 pb-200" id="mediaPartners">
                <Container>
                    <Row className="mb-5">
                        <Col lg={12}>
                            <h2>
                                <span className="c-tag-1">
                                    Media <mark className="mark ">Partners</mark>
                                </span>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="align-items-stretch program">
                        <Col sm={12} className="py-5">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-5 c-tag-1">
                                    <span className="h4">Title Sponsor</span>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="#" className="sponsor t-spon">
                                        <img className="img-fluid" src={yamaha} alt="yamaha"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="py-5">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-5 c-tag-1">
                                    <span className="h4">Gold Sponsor</span>
                                </Col>
                                <Col sm={6} className="c-tag-1">
                                    <a href="#" className="sponsor">
                                        <img className="img-fluid" src={kings} alt="kings"/>        
                                    </a>
                                </Col>
                                <Col sm={6} className="c-tag-1">
                                    <a href="#" className="sponsor">
                                        <img className="img-fluid" src={kings} alt="kings"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="py-5">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-5 c-tag-1">
                                    <span className="h4">Co-Sponsor</span>
                                </Col>
                                <Col sm={4} className="c-tag-1">
                                    <a href="#" className="sponsor sp-polar">
                                        <img className="img-fluid" src={polar} alt="polar"/>        
                                    </a>
                                </Col>
                                <Col sm={4} className="c-tag-1">
                                    <a href="#" className="ml-5 sponsor sp-dhoni">
                                        <img className="img-fluid" src={dhoni} alt="dhoni"/>        
                                    </a>
                                </Col>
                                <Col sm={4} className="c-tag-1">
                                    <a href="#" className="ml-5 sponsor sp-dhoni">
                                        <img className="img-fluid" src={dhoni} alt="dhoni"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default MediaPartners;