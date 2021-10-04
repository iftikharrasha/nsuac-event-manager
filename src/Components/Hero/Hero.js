import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'react-bootstrap';
import bos from '../../img/bos-hero.png';
import kings from '../../img/kings.png';
import one from '../../img/1.svg';
import two from '../../img/2.svg';
import three from '../../img/3.svg';
import four from '../../img/4.svg';
import eight from '../../img/8.svg';
import nine from '../../img/9.svg';
import ten from '../../img/10.svg';
import eleven from '../../img/11.svg';

const Hero = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('October 15, 2021 00:00:00').getTime();

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

    // document.addEventListener('mousemove', parallax);
    // function parallax(e){
    //     this.querySelectorAll('.layers').forEach(layer => {
    //         const speed = layer.getAttribute('data-speed');
    //         const x = (window.innerWidth - e.pageX*speed)/100;
    //         const y = (window.innerHeight - e.pageY*speed)/100;

    //         layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    //     });
    // }

    return (
        <>
            <section className="hero" id="home">
                <div className="hero-parallax">
                    <img src={one} data-speed="-5" alt="" className="layers"/>
                    <img src={two} data-speed="5" alt="" className="layers"/>
                    <img src={three} data-speed="2" alt="" className="layers"/>
                    <img src={four} data-speed="6" alt="" className="layers"/>
                    <img src={eight} data-speed="-9" alt="" className="layers"/>
                    <img src={nine} data-speed="6" alt="" className="layers"/>
                    <img src={ten} data-speed="-7" alt="" className="layers"/>
                    <img src={eleven} data-speed="-5" alt="" className="layers"/>
                </div>
                <div className="hero-contents">
                    <Container>
                        <div className="pt-150">
                            <Row>
                                <Col sm={12} className="mt-5">
                                    <span className="presents">Bashundhara Kings Presents</span>
                                    <h1 className="mb-4 bold-140 text-center">Bangabandhu <span>Battle of </span><span>Skills</span> 2021</h1>
                                </Col>
                                <Col className="pt-5">
                                    <div className="host text-center"> 
                                        <LazyLoadImage effect="blur" src={bos} className="s-img-switch mr-sm-2 mb-sm-0 mb-3" alt="bos"/>
                                        <LazyLoadImage effect="blur" src={kings} className="s-img-switch ml-sm-1" alt="kings"/>
                                    </div>                      
                                </Col>
                                <Col sm={12} className="mt-5 text-center">
                                    <h2 className="lit-32 text-center">Registration ongoing for Battle of Skills!</h2>
                                </Col>
                                <Col sm={12} className="mt-2 text-center">
                                    <p className="loc-date lit-18">
                                        <span>
                                            <i className="fa fa-map-marker pr-2"></i>
                                            North South University
                                        </span>
                                        <span>
                                            <i className="fa fa-calendar pr-2"></i>
                                            October 3 - 15, 2021
                                        </span>
                                    </p>
                                </Col>
                                <Col sm={12} className="my-5">
                                    <div id="timer" className="d-flex mb-3">
                                        <div className="time grain-bg medi-50" id="days">{timerDays}<span className="lit-20 c-tag-3">Days</span></div>
                                        <div className="time grain-bg medi-50" id="days">{timerHours}<span  className="lit-20 c-tag-3">Hours</span></div>
                                        <div className="time grain-bg medi-50" id="days">{timerMinutes}<span  className="lit-20 c-tag-3">Minutes</span></div>
                                        <div className="time grain-bg medi-50" id="days">{timerSeconds}<span  className="lit-20 c-tag-3">Seconds</span></div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                    {/* <Container>
                        <Row className="pt-5">
                            <Col className="pt-5">
                                <div className="host text-center"> 
                                    <LazyLoadImage effect="blur" src={nsuac} className="s-img-switch" alt=""/>
                                </div>                      
                            </Col>
                        </Row>
                    </Container> */}
                </div>
            </section>
        </>
    );
};

export default Hero;