import React, { useEffect, useRef, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Hero.css';

const Hero = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 25, 2021 00:00:00').getTime();
        console.log(countdownDate);

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if(distance < 0){
                //stop time
                clearInterval(interval.current);
            }else{
                //update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }

        }, 1000);
    };

    //componentDitMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    });

    return (
        <>
            <section className="hero">
                <Container>
                    <div className="paddi text-center">
                        <Row>
                            <Col sm={12} className="mb-3">
                                <h1 className="mb-4">NSU <span>SPORTS</span> <span>CARNIVAL</span> 2021</h1>
                            </Col>
                            <Col sm={12} className="my-5">
                                <div id="timer" className="d-flex mb-3">
                                    <div className="time grain-bg" id="days">{timerDays}<span>Days</span></div>
                                    <div className="time grain-bg" id="days">{timerHours}<span>Hours</span></div>
                                    <div className="time grain-bg" id="days">{timerMinutes}<span>Minutes</span></div>
                                    <div className="time grain-bg" id="days">{timerSeconds}<span>Seconds</span></div>
                                </div>
                            </Col>
                            <Col sm={12} className="mt-5">
                                <p className="loc-date">
                                    <span>
                                        <i className="fa fa-map-marker"></i>
                                        North South University
                                    </span>
                                    <span>
                                        <i className="fa fa-calendar"></i>
                                        June 1 to 12, 2021
                                    </span>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container>
                    <div className="pt-5 row">
                        <div className="col-12 pt-5">
                            <div className="host text-center"> 
                                <img src="img/nsuac.jpg" className="s-img-switch" alt=""/>
                            </div>                      
                        </div>
                    </div>
                </Container>
            </section>

            {/* <Container>
                    <Row className="paddi text-center">
                        <Col className="mb-3">
                            <h1 className="mb-4">NSU <span>SPORTS</span> <span>CARNIVAL</span> 2021</h1>
                        </Col>
                        <Col className="my-5">
                                    <div id="timer" className="d-flex mb-3">
                                        <div className="time grain-bg" id="days">12<span>Days</span></div>
                                        <div className="time grain-bg" id="days">2<span>Hours</span></div>
                                        <div className="time grain-bg" id="days">43<span>Minutes</span></div>
                                        <div className="time grain-bg" id="days">08<span>Seconds</span></div>
                                    </div>
                        </Col>
                        <Col className="mt-5">
                            <p className="loc-date">
                                <span>
                                    <i className="fa fa-map-marker"></i>
                                    North South University
                                </span>
                                <span>
                                    <i className="fa fa-calendar"></i>
                                    June 1 to 12, 2021
                                </span>
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row className="pt-5">
                        <Col className="pt-5">
                            <div className="host text-center"> 
                                <img src="img/nsuac.jpg" className="s-img-switch" alt=""/>
                            </div>                      
                        </Col>
                    </Row>
                </Container> */}
        </>
    );
};

export default Hero;