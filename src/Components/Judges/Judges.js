import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';  
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';  
import img1 from '../../img/judge-01.jpg';
import img2 from '../../img/judge-02.jpg';
import img3 from '../../img/judge-03.jpg';

const Judges = () => {

	const gallery = [
        {
            id: 1,
            imgSrc: img1,
            name: "Syed Abid Hussain Sami",
            designation: "Program Presenter at Jamuna TV and Cricket Analyst and Commentator at Radio Bhumi 92.8 FM",
            video: "https://www.youtube.com/watch?v=htm4DaOYTVQ",
        },
        {
            id: 2,
            imgSrc: img2,
            name: "Farjana Zahir Pomi",
            designation: "Senior Reporter and Presenter at DBC News",
            video: "https://www.youtube.com/watch?v=zASgCG4IZ-s",
        },
        {
            id: 3,
            imgSrc: img3,
            name: "Fahim Rahman",
            designation: "Special Correspondent at Ekattor and Radio Jockey at Radio Aamar 88.4 FM",
            video: "https://www.youtube.com/watch?v=-W5FFp_oXwk",
        },
    ]

    const state= {
        responsive:{
            0: {
                items: 1,
            },
            450: {
                items: 1,
            },
            1000: {
                items: 2,
            },
            1400: {
                items: 3,
            },
        },
    }

    return (
        <>
            <section className="judges mt-100" id="judges">
                <Container className="c_custom">
                    <Row>

                        <h2 className="pb-5 medi-40"><span className="c-tag-2">JUDGES' <mark className="mark c-tag-3">Panel</mark></span></h2>

                        <Col lg={12}>
                            <div className="outer">
                                <OwlCarousel id="big" className="owl-theme" items={1} loop={false} autoplay={false} responsive={state.responsive} nav={true}>
                                    
                                    {
                                        gallery.map((item) => (

                                            <div className="item" key={item.id}>
                                                <Row>
                                                    <Col xl={11} className="offset-xl-1">
                                                        <div className="video_item">
                                                            <LazyLoadImage effect="blur" src={item.imgSrc} alt="Image1"/>
                                                        </div>

                                                        <div className="d-flex justify-content-center align-items-center">
                                                            <div className="video_con">
                                                                <h3 className="medi-30 c-tag-5 mt-4">{item.name}</h3>
                                                                <ul>
                                                                    <li><p className="lit-18"><i class="fa fa-bookmark-o c-tag-4" aria-hidden="true"></i> {item.designation}</p></li>
                                                                </ul>

                                                                <div className="call-to-act py-5">
                                                                    <a href={item.video} className="px-5 py-3" target="_blank" rel="noreferrer">
                                                                        <span> Hear From Judges </span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        ))
                                    }
                                    
                                </OwlCarousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
		</section>
        </>
    );
};

export default Judges;