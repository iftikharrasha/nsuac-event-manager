import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './CampusStarEnglish.css';
import poster from '../../img/Campus-Star.jpg';
import StarsGallery from '../StarsGallery/StarsGallery';

const CampusStarEnglish = () => {
    return (
        <>
            <section className="campusStar pt-150">
                <Container>
                    <Row>
                        <Col sm={10} className="pb-sm-5 pb-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/home" className="medi-15 c-tag-1" >Bangabandhu Battle of Skills 2021</Link>
                                    </li>
                                    <li className="breadcrumb-item active medi-15 c-tag-1 c-tag-1" aria-current="page">Campus Star</li>
                                </ol>
                            </nav>
                        </Col>
                        <Col sm={2} className="pb-sm-5 pb-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <Link to="/campus-star/bn" className="medi-15 c-tag-1" href="index.html">
                                            <img src="https://lipis.github.io/flag-icon-css/flags/4x3/bd.svg" alt="bangladesh-flag"/>
                                            <span className="lang-txt">BN</span></Link>
                                    </li>
                                </ol>
                            </nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pb-5">
                            <div className="pt-4 pb-3">
                                <h2 className="pt-30 c-tag-1 semi-28">Campus Star Recruitment for BBS'21 Going on!
                                </h2>
                                <p className="pt-3 c-tag-1 lit-18">Join the biggest online sports skills competition in Bangladesh as The Campus Star!! Be the facilitator of the event and show your love for sports!!!</p>

                                <div className="text-center my-5">
                                    <img src={poster} alt="poster" className="img-fluid w-50"/>
                                </div>
                                
                                <p className="pt-3 c-tag-1 lit-18">Bangabandhu Battle of Skills 2021 organized by North South University Athletics Club and under the direct supervision of NSU authority, will be the first of its kind. It will create a platform to groom potential players and create a huge hype and excitement all over the country. The event aims to offer a festive mood to enjoy and participate in various sport skills events. This event will be open for all students within the age of 12 to 30 years all around the country. NSUAC aims to begin a new era of enjoying sports in a different flavour.</p>

                                <h3 className="py-5 c-tag-1 medi-30 text-center">" Not a player!!! No worries. Be the playmaker. "</h3>

                                <p className="pt-3 c-tag-1 lit-18">North South University Athletics Club is providing a great opportunity for the playmaker by recruiting Bangabandhu Battle of Skills Campus Star.</p>

                                <p className="pt-3 c-tag-1 lit-18">It is a 15-day Campus Star program that enables university, college, and school students all over Bangladesh to learn administrative supervision, comprehensive leadership, and everything related to the exciting world of sports culture. university, college, and school students who have an influential charisma and aspire to learn more about the sports related event, besides, interested to explore the event organizing activities of the university clubs and simultaneously generate unique ideas to see them implemented are highly encouraged to apply for the Bangabandhu Battle of Skills Campus Star program.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <iframe width="100%" height="600" src="https://www.youtube.com/embed/BQf5EWap5xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Row>
                    <Row>
                        <Col className="pb-5">
                            <div className="pt-4 pb-3">
                                <h2 className="pt-30 c-tag-1 semi-28">A Campus Star must have:
                                    </h2>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>1. </span>Leadership skill</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>2. </span>Convincing ability</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>3. </span>Must have the ability to gather feedback and provide insides simultaneously</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>4. </span>Professionalism</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>5. </span>Experience</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>6. </span>Better communication skill</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>7. </span>Good social media presence (It is better if he/she has his/ her own campus related Facebook group or page.)</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>8. </span>Has to play an important role in Own campus social media groups</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>9. </span>Has to be creative with modern social media technology</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pb-5">
                            <div className="pt-4 pb-3">
                                <h2 className="pt-30 c-tag-1 semi-28">Benefits of being Bangabandhu Battle of Skills Campus Star:
                                    </h2>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>1. </span>Certificate of Recognitions</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>2. </span>Social Media Recognition</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>3. </span>Souvenirs signed by Sports Stars of Bangladesh</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>4. </span>Opportunity to work with team NSUAC</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="pb-5">
                            <div className="pt-4 pb-3">
                                <h2 className="pt-30 c-tag-1 semi-28">Responsibilities as a Campus Star:
                                    </h2>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>1. </span>Promote Event Activities in different Social Media Groups of own Campus</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>2. </span>Increase Viewers for the event</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>3. </span>Increase Participants for the events</p>

                                <p className="pt-3 c-tag-1 lit-18">If you think you’re capable enough to uphold the honour and dignity by representing your institution throughout the nation as a campus star, you are just a step away, mail us at <span className="semi-18">athletics.club@northsouth.edu</span> with all the necessary details as mentioned. We will contact you as soon as possible for a short interview followed by an appointment!!!! So, grab your opportunity and apply right away.</p>

                                <div className="pt-5 call-to-act mt-2 text-sm-center">
                                        <a className="disabled">
                                            <span> Become a Campus Star!</span>
                                        </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <StarsGallery></StarsGallery>
            </section>
        </>
    );
};

export default CampusStarEnglish;