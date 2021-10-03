import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';  
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';  
import img1 from '../../img/sara.jpg';
import img2 from '../../img/hanjala.jpg';
import img3 from '../../img/ishmam.jpg';
import img4 from '../../img/hasin.jpg';
import img5 from '../../img/taslimul.jpg';
import img6 from '../../img/tanzimul.jpg';
import img7 from '../../img/mahin.jpg';
import img8 from '../../img/rakibul.jpg';
import img9 from '../../img/nazifa.jpg';
import img10 from '../../img/sajid.jpg';
import img11 from '../../img/woaraka.jpg';
import img12 from '../../img/munazir.jpg';
import img13 from '../../img/efaz.jpg';
import img14 from '../../img/tasmia.jpg';
import img15 from '../../img/jawad.jpg';
import img16 from '../../img/minika.jpg';
import img17 from '../../img/tuhin.jpg';
import img18 from '../../img/solyman.jpg';
import img19 from '../../img/nusrat.jpg';
import img20 from '../../img/reya.jpg';
import img21 from '../../img/mehjabin.jpg';
import img22 from '../../img/fardin.jpg';
import img23 from '../../img/maruf.jpg';
import img24 from '../../img/fahim.jpg';
import img25 from '../../img/shaklyen.jpg';
import './StarsGallery.css';

const StarsGallery = () => {

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
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    }

    return (
        <>
            <section className="top-videos mt-100" id="star">
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
												<Col>
													<div className="video_item p-5">
														<LazyLoadImage effect="blur" src={item.imgSrc} alt={item.imgSrc}/>
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

export default StarsGallery;