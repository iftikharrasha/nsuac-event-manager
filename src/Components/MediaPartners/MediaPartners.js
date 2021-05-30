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
            <section className="programs pt-200 pb-200">
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
                            <Row className="align-items-stretch">
                                <Col lg={3} sm={4} className="mb-3 mb-md-0 c-tag-1">
                                    <span className="h4">Title Sponsor</span>
                                </Col>
                                <Col lg={9} sm={8} className="c-tag-1">
                                    <a href="https://acimotors-bd.com/" className="sponsor t-spon">
                                        <img className="img-fluid" src={yamaha} alt="yamaha"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="py-5">
                            <Row className="align-items-stretch">
                                <Col lg={3} sm={4} className="mb-3 mb-md-0 c-tag-1">
                                    <span className="h4">Gold Sponsor</span>
                                </Col>
                                <Col lg={9} sm={8} className="c-tag-1">
                                    <a href="https://acimotors-bd.com/" className="sponsor">
                                        <img className="img-fluid" src={kings} alt="kings"/>        
                                    </a>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={12} className="py-5">
                            <Row className="align-items-stretch">
                                <Col lg={3} sm={4} className="mb-3 mb-md-0 c-tag-1">
                                    <span className="h4">Co-Sponsor</span>
                                </Col>
                                <Col lg={9} sm={8} className="c-tag-1">
                                    <a href="https://acimotors-bd.com/" className="sponsor sp-polar">
                                        <img className="img-fluid" src={polar} alt="polar"/>        
                                    </a>
                                    <a href="https://acimotors-bd.com/" className="ml-5 sponsor sp-dhoni">
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