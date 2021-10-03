import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Rules.css';

const Rules = (props) => {
    const {event, till1, till2, till3, till4, till5, till6, till7, till8, date, time, key} = props.rule;

    return (
        <>
            <Col sm={12} className="border-top border-bottom py-lg-5 py-3">
                <Row className="align-items-stretch">
                    <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                        <span className="h4">{date}</span> 
                        <p>{time}</p>
                    </Col>
                    <Col md={11} className="c-tag-1">
                        <h2 className="lit-32 pt-0">{event}</h2>
                        <span>{till1} <br /> {till2} <br /> {till3} <br /> {till4} <br /> {till5} <br /> {till6} <br /> {till7} <br /> {till8}</span>
                    </Col>
                </Row>
            </Col>
        </>
    );
};

export default Rules;