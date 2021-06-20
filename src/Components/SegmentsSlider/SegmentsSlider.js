import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Segment from '../Segment/Segment';
import './SegmentsSlider.css';

import segments from '../../data/segments.json';

const SegmentsSlider = () => {
    var settings = {
                dots: true,
                arrows: true,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 3000,
                speed: 700,
                slidesToShow: 4,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 1500,
                        settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 1028,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 800,
                        settings: {
                            dots: true,
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 525,
                        settings: {
                            dots: true,
                            arrows: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ],
      };
      
    return (
        <>
            <section className="segments pt-200 pb-200" id="segments">
                <Container>
                    <Row>
                        <Col sm={12}>
                            <h2>
                                <span className="c-tag-1">
                                    Event <mark className="mark c-tag-2">Segments</mark>
                                </span>
                            </h2>
                        </Col>
                    </Row>
                </Container>
                <div className="slider pt-5">
                    <div className="responsive">
                    
                    <Slider {...settings}>

                        {
                            segments.map(segment => <Segment segment={segment} key={segment.key}></Segment>)
                        }

                    </Slider>

                    </div>
                </div>
            </section>
        </>
    );
};

export default SegmentsSlider;