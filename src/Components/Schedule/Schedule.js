import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Schedule.css';

const Schedule = (props) => {
    const {event, till, date, time, key} = props.schedule;

    return (
        <>
            <Col sm={12} className="border-top border-bottom py-lg-5 py-3">
                <Row className="align-items-stretch">
                    <Col md={3} className="mb-3 mb-md-0 c-tag-1">
                        <span className="h4">{date}</span> 
                        <p>{time}</p>
                    </Col>
                    <Col md={9} className="c-tag-1">
                        <h2>{event}</h2>
                        <span>{till}</span>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default Schedule;