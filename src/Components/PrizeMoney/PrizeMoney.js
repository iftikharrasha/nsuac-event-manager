import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './PrizeMoney.css';
import trophy from '../../img/trophy.svg';
import trophy2 from '../../img/trophy2.svg';
import trophy3 from '../../img/trophy3.svg';
import trophy4 from '../../img/trophy4.svg';
import trophy5 from '../../img/trophy5.svg';
import CardSegments from '../CardSegments/CardSegments';
import Registration from '../Registration/Registration';

const PrizeMoney = () => {
    return (
        <>
            <section className="programs mt-100" id="rules">
                    <div className="program-wrapper">
                        {/* <div className="poster">
                            <LazyLoadImage effect="blur" className="img-fluid" src={poster} alt="poster"/>
                        </div> */}
                        <div className="timings">
                    
                            <Container className="mt-100">
                                <Row className="mb-5">
                                    <Col lg={12}>
                                        <h2 className="medi-40">
                                            <span className="c-tag-1">
                                                BBS'21 <mark className="mark ">Rules</mark>
                                            </span>
                                        </h2>
                                    </Col>
                                </Row>

                                <Row className="align-items-stretch program">
                                    
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#1</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">The competition is open for all the school, college, and university students aged between 12-30.</h2>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#2</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">Each participant must focus on ONE of the following sports skills</h2>
                                                <span>- Football <br /> - Cricket <br /> - Cycle Stunt <br /> - Basketball <br /> - Table Tennis <br /> - Rubik's Cube <br /> - Carrom Trick Shot / Pool/ Billiard Trick Shot <br /> - Free Hand Gymnastics/ Martial Arts</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#3</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">Participants MUST submit their videos as individuals, and each participant can upload only ONE video. </h2>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#4</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">The video length MUST be within 45 to 90 seconds. </h2>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="350" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#5</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">Participants MUST upload their videos through the google form provided on the Facebook page of NSU Athletics Club/website during the registration time. </h2>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#6</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">Contents (video) MUST be submitted through the website (google form) starting October 3, 2021. Winners will be announced on October 16, 2021.</h2>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="450" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#7</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">Participants should keep at least one copy of their video. </h2>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#8</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">No copyrighted materials (music, images, animation, video clips, etc.) can be used for this contest unless you own the copyright or have a license to use the material for this contest. Written permission must be obtained and provided upon request for all copyrighted materials.</h2>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="550" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#9</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">No part of a prize is exchangeable for cash or any other prize.</h2>
                                            </Col>
                                        </Row>
                                    </Col> 
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#10</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">After receiving the videos, NSUAC will upload the video on the Facebook page. Using the necessary hashtags provided in the post, the participants MUST share their videos from the Facebook page.</h2>
                                            </Col>
                                        </Row>
                                    </Col> 
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="650" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#11</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">The 40% marking of their content will be based on the "viewers' choice." That is, the more a particular video is shared, liked, and commented on through social media, the more marks the owner of the video will get. And the rest, 60%, will be judged by the honorable judges of Bangabandhu Battle of Skills 2021.</h2>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col sm={12} className="border-top border-bottom py-3" data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                                        <Row className="align-items-stretch">
                                            <Col md={1} className="mb-3 mb-md-0 c-tag-1">
                                                <span>#12</span>
                                            </Col>
                                            <Col md={11} className="c-tag-1">
                                                <h2 className="lit-16 pt-0">The video will be evaluated by the sports skills of the participants, not video quality. Their contents will be judged on: · Skills expressed and · Technical ability. <br /><br /></h2>
                                                <span>For more updates and guidelines, join this <a href="https://www.facebook.com/groups/390447699353823">https://www.facebook.com/groups/390447699353823</a> and visit: <a href="BBS'21.nsuac.org">BBS'21.nsuac.org</a></span> <br />
                                                <span>* The deadline for submissions is 11:59 pm (GMT +6) on Friday, October 15, 2021.</span>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>

                    {/* <div className="icon-img"></div> */}
                    <CardSegments/>

                    <Registration/>
                    
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Row className="pt-150 pt-prog pb-prog">
                                    <Col xs={4} data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                                        <div className="trophy-item text-center">
                                            <LazyLoadImage effect="blur" src={trophy} alt="trophy-three" className="img-fluid"/>
                                            <h4 className="c-tag-1 pt-5 semi-28">1st Prize</h4>
                                        </div>
                                    </Col>
                                    <Col xs={4} data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                                        <div className="trophy-item text-center">
                                            <LazyLoadImage effect="blur" src={trophy2} alt="trophy-one" className="img-fluid"/>
                                            <h4 className="c-tag-1 pt-5 semi-28">2nd Prize</h4>
                                        </div>
                                    </Col>
                                    <Col xs={4} data-aos="fade-up" data-aos-delay="700" data-aos-duration="1000">
                                        <div className="trophy-item text-center">
                                            <LazyLoadImage effect="blur" src={trophy3} alt="trophy-two" className="img-fluid"/>
                                            <h4 className="c-tag-1 pt-5 semi-28">3rd Prize</h4>
                                        </div>
                                    </Col>
                                    <Col xs={6} data-aos="fade-up" data-aos-delay="900" data-aos-duration="1000">
                                        <div className="trophy-item text-center">
                                            <LazyLoadImage effect="blur" src={trophy4} alt="trophy-two" className="img-fluid"/>
                                            <h4 className="c-tag-1 pt-5 semi-28">4th Prize</h4>
                                        </div>
                                    </Col>
                                    <Col xs={6} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                                        <div className="trophy-item text-center">
                                            <LazyLoadImage effect="blur" src={trophy5} alt="trophy-two" className="img-fluid"/>
                                            <h4 className="c-tag-1 pt-5 semi-28">5th Prize</h4>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
            </section>
        </>
    );
};

export default PrizeMoney;