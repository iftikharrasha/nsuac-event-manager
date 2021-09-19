import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'react-bootstrap';
import nsuac from '../../img/nsuac.jpg';

const Hero = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('October 16, 2021 00:00:00').getTime();

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
            <section className="hero" id="home">

                <Container>
                    <div className="pt-150 text-center">
                        <Row>
                            <Col sm={12} className="my-5">
                                <div id="timer" className="d-flex mb-3">
                                    <div className="time grain-bg medi-50" id="days">{timerDays}<span className="lit-20 c-tag-3">Days</span></div>
                                    <div className="time grain-bg medi-50" id="days">{timerHours}<span  className="lit-20 c-tag-3">Hours</span></div>
                                    <div className="time grain-bg medi-50" id="days">{timerMinutes}<span  className="lit-20 c-tag-3">Minutes</span></div>
                                    <div className="time grain-bg medi-50" id="days">{timerSeconds}<span  className="lit-20 c-tag-3">Seconds</span></div>
                                </div>
                            </Col>
                            <Col sm={12} className="mt-5">
                                {/* <h1 className="mb-4 bold-140">Bangabandhu<span className="d-block">Battle of </span><span>Skills</span> 2021</h1> */}
                                <h2 className="lit-32">Registration ongoing for Campus Star!</h2>
                            </Col>
                            <Col sm={12} className="mt-2">
                                <p className="loc-date lit-18">
                                    <span>
                                        <i className="fa fa-map-marker pr-2"></i>
                                        North South University
                                    </span>
                                    <span>
                                        <i className="fa fa-calendar pr-2"></i>
                                        October 5 to 16, 2021
                                    </span>
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Container>
                <Container>
                    <Row className="pt-5">
                        <Col className="pt-5">
                            <div className="host text-center"> 
                                <LazyLoadImage effect="blur" src={nsuac} className="s-img-switch" alt=""/>
                            </div>                      
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default Hero;