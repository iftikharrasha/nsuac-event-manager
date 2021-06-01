import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SchedulesTable.css';
import Schedule from '../Schedule/Schedule';
import poster from '../../img/poster.svg';
import schedules from '../../data/schedules.json';

const SchedulesTable = () => {
    return (
        <>
            <section className="programs pt-200">
                    <div className="program-wrapper">
                        <div className="poster">
                            <img className="img-fluid" src={poster} alt="poster"/>
                        </div>
                        <div className="timings">
                            <Container>
                                <Row>
                                    <Col lg={9} className="offset-lg-1">
                                        <Row className="mb-5">
                                            <Col lg={12}>
                                                <h2>
                                                    <span className="c-tag-1">
                                                        Time <mark className="mark ">Schedules</mark>
                                                    </span>
                                                </h2>
                                            </Col>
                                            {/* <Col lg={8} className="offset-lg-4 mt-5 pl-lg-5 c-tag-1">
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error deleniti dolores necessitatibus eligendi. Nesciunt repellendus ab voluptatibus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero repudiandae atque quam!
                                                </p>
                                            </Col> */}
                                        </Row>

                                        <Row className="align-items-stretch program">
                                            
                                                {
                                                schedules.map(schedule => <Schedule schedule={schedule} key={schedule.key}></Schedule>)
                                                }
                                            
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default SchedulesTable;