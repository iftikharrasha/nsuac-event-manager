import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './SchedulesTable.css';
import Schedule from '../Schedule/Schedule';
import poster from '../../img/poster.svg';
import trophy from '../../img/trophy.svg';
import play from '../../img/play.svg';
import whistle from '../../img/whistle.svg';
import schedules from '../../data/schedules.json';

const SchedulesTable = () => {
    return (
        <>
            <section className="programs pt-200" id="schedules">
                    <div className="program-wrapper">
                        <div className="poster">
                            <LazyLoadImage effect="blur" className="img-fluid" src={poster} alt="poster"/>
                        </div>
                        <div className="timings">
                            <Container>
                                <Row>
                                    <Col xl={9} lg={12}>
                                        <Row className="pt-150 pb-200 pt-prog pb-prog">
                                            <Col md={4}>
                                                <div className="trophy-item text-center">
                                                    <LazyLoadImage effect="blur" src={trophy} alt="trophy-three" className="img-fluid"/>
                                                    <h4 className="c-tag-1 pt-5 lit-20">1 Trophy</h4>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="trophy-item text-center">
                                                    <LazyLoadImage effect="blur" src={whistle} alt="trophy-one" className="img-fluid"/>
                                                    <h4 className="c-tag-1 pt-5 lit-20">10,000 participants</h4>
                                                </div>
                                            </Col>
                                            <Col md={4}>
                                                <div className="trophy-item text-center">
                                                    <LazyLoadImage effect="blur" src={play} alt="trophy-two" className="img-fluid"/>
                                                    <h4 className="c-tag-1 pt-5 lit-20">7 Videos</h4>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                    {/* <Container className="c_custom pt-200">
                        <Row className="mb-5">
                            <Col lg={12} className="">
                                <div className="box-1">
                                    <img src={sportsIcons} alt="sportsIcons" className="img-fluid"/>
                                </div>
                            </Col>
                        </Row>
                    </Container> */}

                    <div className="icon-img"></div>
                    
                    <Container className="pt-200">
                        <Row className="mb-5">
                            <Col lg={12}>
                                <h2 className="medi-40">
                                    <span className="c-tag-1">
                                        Time <mark className="mark c-tag-1">Schedules</mark>
                                    </span>
                                </h2>
                            </Col>
                        </Row>

                        <Row className="align-items-stretch program">
                            
                                {
                                    schedules.map(schedule => <Schedule schedule={schedule} key={schedule.key}></Schedule>)
                                }
                                    
                        </Row>
                    </Container>
            </section>
        </>
    );
};

export default SchedulesTable;