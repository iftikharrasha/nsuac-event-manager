import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ncl from '../../img/ncl.svg';
import sportscarnival from '../../img/sportscarnival.svg';
import nfl from '../../img/nfl.svg';
import shuttle from '../../img/shuttle.svg';
import './Achievments.css';

const Achievments = () => {
    return (
        <>
            <section className="trophy pt-300">
                <Container>
                    <Row>
                        <Col lg={6} className="pt-5 d-flex align-items-center">
                            <div className="achieve-text">
                                <h2>
                                    <span className="c-tag-1">
                                        NSU <mark className="mark ">Athletics Club</mark>
                                    </span>
                                </h2>
                                <p className="c-tag-1 py-5">North South University Athletics Club (NSUAC), since its first establishment in 1995, has been guiding all the sports affairs of North South University. It has been 25 years of NSUAC since its birth and is one of the oldest clubs of NSU. The clubs has represented NSU at many Inter University sports events in different sports and have brought many accolades for NSU.</p>
                                <div className="call-to-act pb-5">
                                    <a href="http://www.nsusportscarnival.com" className="px-5 py-3" target="_blank" rel="noreferrer">
                                        <span> Learn More </span>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <Row>
                                <Col sm={6} className="mt-lg-0 mt-5">
                                    <div className="text-center">
                                        <img className="img-fluid" src={sportscarnival} alt="trophy"/>
                                    <h4 className="pt-3 c-tag-3">
                                        <span>Sports Carnival
                                        </span>
                                    </h4>
                                    </div>
                                    <div className="text-center mt-50">
                                        <img className="img-fluid" src={ncl} alt="trophy"/>
                                    <h4 className="pt-3 c-tag-3">
                                        <span>NCL
                                        </span>
                                    </h4>
                                    </div>
                                </Col>
                                <Col sm={6}>
                                    <div className="text-center mt-50">
                                        <img className="img-fluid" src={nfl} alt="trophy"/>
                                    <h4 className="pt-3 c-tag-3">
                                        <span>NFL
                                        </span>
                                    </h4>
                                    </div>
                                    <div className="text-center mt-50">
                                        <img className="img-fluid" src={shuttle} alt="trophy"/>
                                    <h4 className="pt-3 c-tag-3">
                                        <span>Shuttle Masters
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