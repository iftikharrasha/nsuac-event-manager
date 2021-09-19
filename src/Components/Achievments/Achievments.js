import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'react-bootstrap';
import ncl from '../../img/ncl.png';
import sportscarnival from '../../img/sportscarnival.png';
import nfl from '../../img/nfl.png';
import intracricket from '../../img/intracricket.png';
import intrafootball from '../../img/intrafootball.png';

const Achievments = () => {
    return (
        <>
            <section className="trophy pt-150 pb-50" id="nsuac">
                <Container className="c_custom">
                    <Row className="p-4">
                        <Col lg={5} className="pt-5 d-flex align-items-center">
                            <div className="achieve-text">
                                <h2 className="medi-40">
                                    <span className="c-tag-1">
                                        NSU <mark className="mark ">Athletics Club</mark>
                                    </span>
                                </h2>
                                <p className="c-tag-1 py-5 lit-18">North South University Athletics Club (NSUAC), since its first establishment in 1995, has been guiding all the sports affairs of North South University. It has been 25 years of NSUAC since its birth and is one of the oldest clubs of NSU. The clubs has represented NSU at many Inter University sports events in different sports and have brought many accolades for NSU.</p>
                                <div className="call-to-act pb-5">
                                    <a href="https://nsuac.org/" className="px-5 py-3" target="_blank" rel="noreferrer">
                                        <span> Learn More </span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="offset-lg-1">
                            <Row>
                                <Col sm={4} className="mt-lg-0 mt-5">
                                    <div className="text-center">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={sportscarnival} alt="trophy"/>
                                    <h4 className="pt-3 c-tag-3 lit-20">
                                        <span>Sports Carnival
                                        </span>
                                    </h4>
                                    </div>
                                    <div className="text-center mt-50">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={intrafootball} alt="trophy"/>
                                    <h4 className="pt-3 c-tag-3 lit-20">
                                        <span>Intra Batch Football
                                        </span>
                                    </h4>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="text-center mt-50">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={nfl} alt="trophy"/>
                                    <h4 className="pt-3 c-tag-3 lit-20">
                                        <span>NFL 2019
                                        </span>
                                    </h4>
                                    </div>
                                    <div className="text-center mt-50">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={intracricket} alt="trophy"/>
                                    <h4 className="pt-3 c-tag-3 lit-20">
                                        <span>Intra Batch Cricket
                                        </span>
                                    </h4>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className="text-center mt-150">
                                        <LazyLoadImage effect="blur" className="img-fluid" src={ncl} alt="trophy"/>
                                    <h4 className="pt-3 c-tag-3 lit-20">
                                        <span>NCL 2019
                                        </span>
                                    </h4>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Achievments;