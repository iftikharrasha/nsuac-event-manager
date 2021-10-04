import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'react-bootstrap';
import kings from '../../img/bkings.png';
// import jamuna from '../../img/Jamuna-TV.png';
// import radio896 from '../../img/radio896.png';
// import shomokal from '../../img/shomokal.png';
// import business from '../../img/The-Business-Standard-Logo.png';
import jamuna from '../../img/jamuna.png';
import radio896 from '../../img/radio.png';
import shomokal from '../../img/shomokal.png';
import business from '../../img/business.png';
import './MediaPartners.css';

const MediaPartners = () => {
    return (
        <>
            <section className="partners pt-200" id="mediaPartners">
                <Container className="c_custom">
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
                        {/* <Col sm={12} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-5 c-tag-1">
                                    <h4 className="medi-20">Title Sponsor</h4>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="https://www.facebook.com/BashundharaKings/" className="sponsor t-spon" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={kings} alt="kings"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col> */}

                        {/* <Col sm={12} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-5 c-tag-1">
                                    <h4 className="medi-20">Electronic Media Partner</h4>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="https://www.jamuna.tv/" className="sponsor2" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={jamuna} alt="jamuna"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-2 c-tag-1">
                                    <h4 className="medi-20">Radio Partner</h4>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="https://www.radiotodaybd.fm/" className="sponsor3" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={radio896} alt="radio 89.6"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-5 c-tag-1">
                                    <h4 className="medi-20">Bangla Print Media Partner</h4>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="https://samakal.com/" className="sponsor" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={shomokal} alt="shomokal"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-5 c-tag-1">
                                    <h4 className="medi-20">Online English Media Partner</h4>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="https://www.tbsnews.net/" className="" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={business} alt="business"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col> */}

                        <Col lg={3} sm={6} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-0 c-tag-1">
                                    <h4 className="medi-20">Electronic Media Partner</h4>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="https://www.jamuna.tv/" className="" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={jamuna} alt="jamuna"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={3} sm={6} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-0 c-tag-1">
                                    <h4 className="medi-20">Radio Partner</h4>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="https://www.radiotodaybd.fm/" className="" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={radio896} alt="radio 89.6"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={3} sm={6} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-0 c-tag-1">
                                    <h4 className="medi-20">Bangla Print Media Partner</h4>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="https://samakal.com/" className="" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={shomokal} alt="shomokal"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={3} sm={6} className="py-sm-5 py-3">
                            <Row className="text-center pb-50">
                                <Col sm={12} className="mb-0 c-tag-1">
                                    <h4 className="medi-20">Online English Media Partner</h4>
                                </Col>
                                <Col sm={12} className="c-tag-1">
                                    <a href="https://www.tbsnews.net/" className="" target="_blank" rel="noreferrer">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={business} alt="business"/>        
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