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

import img26 from '../../img/Abid Hasan-01.jpg';
import img27 from '../../img/Afia Zahin-01.jpg';
import img28 from '../../img/Ahelee kanit-01.jpg';
import img29 from '../../img/Ariq Roshan-01.jpg';
import img30 from '../../img/Arman Uddin-01-01.jpg';
import img31 from '../../img/Ashraf Shahriar-01.jpg';
import img32 from '../../img/Fahim Alam-01.jpg';
import img33 from '../../img/Feekra Baset-01.jpg';
import img34 from '../../img/Imam Hossain Shibly-01.jpg';
import img35 from '../../img/Jannatul Ferdous Sanjana-01.jpg';
import img36 from '../../img/Kifayat Ibne Rahman-01-01.jpg';
import img37 from '../../img/Labonno Binta Azad-01.jpg';
import img38 from '../../img/Mahi Ashraf-01-01.jpg';
import img39 from '../../img/Maksuda Hasan-01-01.jpg';
import img40 from '../../img/Rafsan Rafi-01.jpg';
import img41 from '../../img/Rashedul Islam-01-01.jpg';
import img42 from '../../img/Redowan Ahmed-01.jpg';
import img43 from '../../img/Samia Tabassum-01.jpg';
import img44 from '../../img/Samin Zarif-01.jpg';
import img45 from '../../img/Sifatus Salehin-01-01.jpg';
import img46 from '../../img/SK Abu Labib-01.jpg';
import img47 from '../../img/Tanjim Tasnia Suhita-01.jpg';
import img48 from '../../img/Tanvir Hasan-01.jpg';
import img49 from '../../img/Tunazzina Mir Tory-01-01.jpg';
import img50 from '../../img/Wasee Ahmed-01.jpg';

import img51 from '../../img/Adib Muntasir-01-01.jpg';
import img52 from '../../img/Tajish Farhan-01.jpg';
import img53 from '../../img/Nadira Tabassum-01.jpg';
import img54 from '../../img/Arnob Shahriar-01.jpg';
import img55 from '../../img/Tasmia Tabassum-01.jpg';
import img56 from '../../img/Anika Hasan-01.jpg';
import img57 from '../../img/Azizur Rahman Niloy-01.jpg';
import img58 from '../../img/Farhan Sadik-01.jpg';
import img59 from '../../img/Humaira Tabassum-01.jpg';
import img60 from '../../img/Ifty Shams-01.jpg';
import img61 from '../../img/Ishmam Ahmed-01-01.jpg';
import img62 from '../../img/Jakia Sultana-01.jpg';
import img63 from '../../img/Meherun Nisa-01.jpg';
import img64 from '../../img/Mim Akter-01.jpg';
import img65 from '../../img/Mumtahina Rahman-01.jpg';
import img66 from '../../img/Muntasir Rahman-01.jpg';
import img67 from '../../img/Nurjahan Akter-01.jpg';
import img68 from '../../img/Noor Mohammad-01.jpg';
import img69 from '../../img/Nowshin Tasfia-01.jpg';
import img70 from '../../img/Afia Zahin-01.jpg';
import img71 from '../../img/Nusrat Majumdar-01.jpg';
import img72 from '../../img/Sayem Bhuiyan-01.jpg';
import img73 from '../../img/Shaafat Khan-01.jpg';
import img74 from '../../img/Shahab Uddin-01.jpg';
import img75 from '../../img/Sumaiya Sultana Antara-01.jpg';


import './StarsGallery.css';

const StarsGallery = () => {

	const gallery1 = [
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

    const gallery2 = [
        {
            id: 26,
            imgSrc: img26,
        },
        {
            id: 27,
            imgSrc: img27,
        },
        {
            id: 28,
            imgSrc: img28,
        },
        {
            id: 29,
            imgSrc: img29,
        },
        {
            id: 30,
            imgSrc: img30,
        },
        {
            id: 31,
            imgSrc: img31,
        },
        {
            id:32,
            imgSrc: img32,
        },
        {
            id: 33,
            imgSrc: img33,
        },
        {
            id: 34,
            imgSrc: img34,
        },
        {
            id: 35,
            imgSrc: img35,
        },
        {
            id: 36,
            imgSrc: img36,
        },
        {
            id: 37,
            imgSrc: img37,
        },
        {
            id: 38,
            imgSrc: img38,
        },
        {
            id: 39,
            imgSrc: img39,
        },
        {
            id: 40,
            imgSrc: img40,
        },
        {
            id: 41,
            imgSrc: img41,
        },
        {
            id: 42,
            imgSrc: img42,
        },
        {
            id: 43,
            imgSrc: img43,
        },
        {
            id: 44,
            imgSrc: img44,
        },
        {
            id: 45,
            imgSrc: img45,
        },
        {
            id: 46,
            imgSrc: img46,
        },
        {
            id: 47,
            imgSrc: img47,
        },
        {
            id: 48,
            imgSrc: img48,
        },
        {
            id: 49,
            imgSrc: img49,
        },
        {
            id: 50,
            imgSrc: img50,
        },
    ]

    const gallery3 = [
        {
            id: 51,
            imgSrc: img51,
        },
        {
            id: 52,
            imgSrc: img52,
        },
        {
            id: 53,
            imgSrc: img53,
        },
        {
            id: 54,
            imgSrc: img54,
        },
        {
            id: 55,
            imgSrc: img55,
        },
        {
            id: 56,
            imgSrc: img56,
        },
        {
            id: 57,
            imgSrc: img57,
        },
        {
            id:58,
            imgSrc: img58,
        },
        {
            id:59,
            imgSrc: img59,
        },
        {
            id: 60,
            imgSrc: img60,
        },
        {
            id: 61,
            imgSrc: img61,
        },
        {
            id: 62,
            imgSrc: img62,
        },
        {
            id: 63,
            imgSrc: img63,
        },
        {
            id: 64,
            imgSrc: img64,
        },
        {
            id: 65,
            imgSrc: img65,
        },
        {
            id: 66,
            imgSrc: img66,
        },
        {
            id: 67,
            imgSrc: img67,
        },
        {
            id: 68,
            imgSrc: img68,
        },
        {
            id: 69,
            imgSrc: img69,
        },
        {
            id: 70,
            imgSrc: img70,
        },
        {
            id: 71,
            imgSrc: img71,
        },
        {
            id: 72,
            imgSrc: img72,
        },
        {
            id: 73,
            imgSrc: img73,
        },
        {
            id: 74,
            imgSrc: img74,
        },
        {
            id: 75,
            imgSrc: img75,
        }
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
                items: 5,
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
                                    gallery1.map((item) => (

										<div className="item" key={item.id}>
											<Row>
												<Col>
													<div className="video_item p-3">
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

                    <Col lg={12} className="mt-5">
						<div className="outer">
							<OwlCarousel id="big" className="owl-theme" items={1} loop autoplay={true} responsive={state.responsive} nav={true}>
								
								{
                                    gallery2.map((item) => (

										<div className="item" key={item.id}>
											<Row>
												<Col>
													<div className="video_item p-3">
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

                    <Col lg={12} className="mt-5">
						<div className="outer">
							<OwlCarousel id="big" className="owl-theme" items={1} loop autoplay={true} responsive={state.responsive} nav={true}>
								
								{
                                    gallery3.map((item) => (

										<div className="item" key={item.id}>
											<Row>
												<Col>
													<div className="video_item p-3">
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