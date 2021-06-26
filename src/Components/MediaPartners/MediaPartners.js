import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'react-bootstrap';
import yamaha from '../../img/yamaha.png';
import kings from '../../img/kings.png';
import polar from '../../img/polar.png';
import dhoni from '../../img/dhoni.png';
import './MediaPartners.css';

const MediaPartners = () => {
    return (
        <>
            <section className="partners pt-200" id="mediaPartners">
                <Container>
                    <Row className="mb-5">
                        <Col lg={12}>
                            <h2 className="medi-40">
                                <span className="c-tag-1">
                                    Media <mark className="mark ">Partners</mark>
                                </span>
                            </h2>
                        </Col>
                    </Row>
                    <Row className="align-items-stretch program">
                        <Col sm={12} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-5 c-tag-1">
                                    <h4 className="medi-30">Title Sponsor</h4>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="#" className="sponsor t-spon">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={yamaha} alt="yamaha"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-5 c-tag-1">
                                    <h4 className="medi-30">Gold Sponsor</h4>
                                </Col>
                                <Col sm={6} className="c-tag-1">
                                    <a href="#" className="sponsor">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={kings} alt="kings"/>        
                                    </a>
                                </Col>
                                <Col sm={6} className="c-tag-1 py-sm-0 py-5">
                                    <a href="#" className="sponsor">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={kings} alt="kings2"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-5 c-tag-1">
                                    <h4 className="medi-30">Co-Sponsor</h4>
                                </Col>
                                <Col sm={4} className="c-tag-1">
                                    <a href="#" className="sponsor sp-polar">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={polar} alt="polar"/>        
                                    </a>
                                </Col>
                                <Col sm={4} className="c-tag-1  py-sm-0 py-5">
                                    <a href="#" className="ml-sm-5 ml-0 sponsor sp-dhoni">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={dhoni} alt="dhoni1"/>        
                                    </a>
                                </Col>
                                <Col sm={4} className="c-tag-1  py-sm-0 py-5">
                                    <a href="#" className="ml-sm-5 ml-0 sponsor sp-dhoni">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={dhoni} alt="dhoni"/>        
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