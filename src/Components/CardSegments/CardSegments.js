import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './CardSegments.css';
import sports from '../../data/sports.json';

const CardSegments = () => {
    return (
        <>
            <section className="segments pt-200" id="segments">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h2 className="medi-40">
                                <span className="c-tag-1">
                                    BBS'21 <mark className="mark c-tag-2">Segments</mark>
                                </span>
                            </h2>
                        </Col>
                    </Row>
                </Container>
                <div className="slider pt-5">
                    <div className="responsive">

                        {
                            sports.map(sport => 
                                
                                <div className="segment-item" key={sport.key} data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                                    <article className="segment">
                                        <div className="segment-img"> 
                                            <LazyLoadImage effect="blur" className="img-fluid" src={sport.img} alt="segment"/>
                                            <ul className="seg-name">
                                                <li>
                                                    <p>{sport.name}</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </article>
                                </div>
                                
                            )
                        }
                    
                        

                    </div>
                </div>
            </section>
        </>
    );
};

export default CardSegments;