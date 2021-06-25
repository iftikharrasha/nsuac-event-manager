import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './CampusStarEnglish.css';

const CampusStarEnglish = () => {
    return (
        <>
            <section className="campusStar pt-150">
                <Container>
                    <Row className="row">
                        <Col sm={10} className="pb-5">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/home" className="medi-15 c-tag-1" >Bangabandhu Battle of Skills 2021</Link>
                                    </li>
                                    <li className="breadcrumb-item active medi-15 c-tag-1 c-tag-1" aria-current="page">Campus Star</li>
                                </ol>
                            </nav>
                        </Col>
                        <Col sm={2} className="pb-5">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <Link to="/campus-star/bn" className="medi-15 c-tag-1" href="index.html">
                                            <img src="https://lipis.github.io/flag-icon-css/flags/4x3/bd.svg"/>
                                            <span class="lang-txt">BN</span></Link>
                                    </li>
                                </ol>
                            </nav>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col className="pb-5">
                            <div className="pt-4 pb-3">
                            <p className="pt-30 med-24 c-tag-1 medi-40">Campus Star Recruitment for BBS Going on!
                            </p>
                            <p className="pt-3 c-tag-1 lit-18">Join the biggest online sports skills competition in Bangladesh as The Campus Star!! Be the facilitator of the event and show your love for sports!!!</p>
                            <p className="pt-3 c-tag-1 lit-18">Bangabandhu Battle of Skills 2021 organized by North South University Athletics Club and under the direct supervision of NSU authority, will be the first of its kind. It will create a platform to groom potential players and create a huge hype and excitement all over the country. The event aims to offer a festive mood to enjoy and participate in various sport skills events. This event will be open for all students within the age of 12 to 30 years all around the country. NSUAC aims to begin a new era of enjoying sports in a different flavour.</p>

                            <h2 className="pt-3 c-tag-1 medi-30 text-center">Not a player!!! No worries. Be the playmaker.</h2>

                            <p className="pt-3 c-tag-1 lit-18">North South University Athletics Club is providing a great opportunity for the playmaker by recruiting Bangabandhu Battle of Skills Campus Star.</p>

                            <p className="pt-3 c-tag-1 lit-18">It is a 15-day Campus Star program that enables university, college, and school students all over Bangladesh to learn administrative supervision, comprehensive leadership, and everything related to the exciting world of sports culture. university, college, and school students who have an influential charisma and aspire to learn more about the sports related event, besides, interested to explore the event organizing activities of the university clubs and simultaneously generate unique ideas to see them implemented are highly encouraged to apply for the Bangabandhu Battle of Skills Campus Star program.</p>

                            <p className="pt-3">- Right to Know and Access. You may submit a verifiable request for information regarding the:</p>
                            <p className="pl-3 pl-sm-5 pb-1 m-0"><span className="med-16">1. </span>categories of Personal Information we collect, use, or share</p>
                            <p className="pl-3 pl-sm-5 pb-1 m-0"><span className="med-16">2. </span>purposes for which categories of Personal Information are collected or used by us</p>
                            <p className="pl-3 pl-sm-5 pb-1 m-0"><span className="med-16">3. </span>categories of sources from which we collect Personal Information; and</p>
                            <p className="pl-3 pl-sm-5 pb-1 m-0"><span className="med-16">4. </span>specific pieces of Personal Information we have collected about you.</p>
                            <p className="pt-3">- Right to Equal Service. We will not discriminate against you if you exercise your privacy rights.</p>
                            <p className="pt-3">- Right to Delete. You may submit a verifiable request to close your account and we will delete Personal Information about you that we have collected.</p>
                            <p className="pt-3">- Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</p>
                            <p className="pt-3">If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
                                We do not sell the Personal Information of our users. <br/><br/> For more information about these rights, please contact us.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default CampusStarEnglish;