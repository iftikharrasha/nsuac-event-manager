import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';  
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';  
import img1 from '../../img/Sara Tasnim.jpg';
import img2 from '../../img/Hanjala Sakib.jpg';
import img3 from '../../img/Safwan Ishmam.jpg';
import img4 from '../../img/Hasin Safwan.jpg';
import img5 from '../../img/Taslimul Islam.jpg';
import img6 from '../../img/Tanzimul Alam.jpg';
import img7 from '../../img/Mahin Abrar.jpg';
import img8 from '../../img/Rakibul Hassan.jpg';
import img9 from '../../img/Nazifa Maliha.jpg';
import img10 from '../../img/Sajid Atahar.jpg';
import img11 from '../../img/Woaraka Rafi.jpg';
import img12 from '../../img/Munazir Karim.jpg';
import img13 from '../../img/Efaz Ahmed.jpg';
import img14 from '../../img/Tasmia Sanju.jpg';
import img15 from '../../img/Jawad Rashid.jpg';
import img16 from '../../img/Monika Chowdhury.jpg';
import img17 from '../../img/Tuhin Mamun.jpg';
import img18 from '../../img/Md Solyman.jpg';
import img19 from '../../img/Nusrat Jevin.jpg';
import img20 from '../../img/Nusrat Reya.jpg';
import img21 from '../../img/Mehjabin Khan.jpg';
import img22 from '../../img/Fardin Faisal.jpg';
import img23 from '../../img/Abdullah Maruf.jpg';
import img24 from '../../img/Fahim Al Abdullah.jpg';
import img25 from '../../img/Shaklyen Promit.jpg';
import './TopContestants.css';

const TopContestants = () => {

	const gallery = [
        {
            id: 1,
            imgSrc: img1,
        },
        {
            id: 2,
            imgSrc: img2,
        },
        {
            id: 3,
            imgSrc: img3,
        },
        {
            id: 4,
            imgSrc: img4,
        },
        {
            id: 5,
            imgSrc: img5,
        },
        {
            id: 6,
            imgSrc: img6,
        },
        {
            id: 7,
            imgSrc: img7,
        },
        {
            id: 8,
            imgSrc: img8,
        },
        {
            id: 9,
            imgSrc: img9,
        },
        {
            id: 10,
            imgSrc: img10,
        },
        {
            id: 11,
            imgSrc: img11,
        },
        {
            id: 12,
            imgSrc: img12,
        },
        {
            id: 13,
            imgSrc: img13,
        },
        {
            id: 14,
            imgSrc: img14,
        },
        {
            id: 15,
            imgSrc: img15,
        },
        {
            id: 16,
            imgSrc: img16,
        },
        {
            id: 17,
            imgSrc: img17,
        },
        {
            id: 18,
            imgSrc: img18,
        },
        {
            id: 19,
            imgSrc: img19,
        },
        {
            id: 20,
            imgSrc: img20,
        },
        {
            id: 21,
            imgSrc: img21,
        },
        {
            id: 22,
            imgSrc: img22,
        },
        {
            id: 23,
            imgSrc: img23,
        },
        {
            id: 24,
            imgSrc: img24,
        },
        {
            id: 25,
            imgSrc: img25,
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
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    }

    return (
        <>
            <section className="top-videos mt-100" id="topVideos">
			<Container className="c_custom">
				<Row>

                    <h2 className="pb-5 medi-40"><span className="c-tag-2">Campus <mark className="mark c-tag-3">Stars</mark></span></h2>

					<Col lg={12}>
						<div className="outer">
							<OwlCarousel id="big" className="owl-theme" items={1} loop autoplay={true} responsive={state.responsive} nav={true}>
								
								{
                                    gallery.map((item) => (

										<div className="item" key={item.id}>
											<Row>
												<Col xl={7} className="offset-xl-1">
													<div className="video_item">
														<LazyLoadImage effect="blur" src={item.imgSrc} alt="Image1"/>
													</div>
												</Col>

                                                <Col xl={3} className="d-flex justify-content-center align-items-center">
                                                    <div className="video_con">
                                                        <h3 className="semi-40 c-tag-5">Contastant #1</h3>
                                                        <p className="lit-18">John Doe, Dhaka University</p>

                                                        <ul>
                                                            <li> <p className="lit-18">Lorem ipsum dolor sit amet.</p></li>
                                                            <li> <p className="lit-18">Lorem ipsum dolor sit amet.</p></li>
                                                            <li> <p className="lit-18">Lorem ipsum dolor sit amet.</p></li>
                                                        </ul>

                                                        <div className="call-to-act py-5">
                                                            <a href="http://www.nsusportscarnival.com" className="px-5 py-3" target="_blank" rel="noreferrer">
                                                                <span> Vote Now </span>
                                                            </a>
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

export default TopContestants;