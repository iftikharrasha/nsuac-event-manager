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

import img26 from '../../img/Abid Hasan.jpg';
import img27 from '../../img/Afia Zahin.jpg';
import img28 from '../../img/Ahlee Kanit.jpg';
import img29 from '../../img/Ariq Roshan.jpg';
import img30 from '../../img/Arman Uddin.jpg';
import img31 from '../../img/Ashraf Sharier.jpg';
import img32 from '../../img/Fahim Alam.jpg';
import img33 from '../../img/Feekra Baset.jpg';
import img34 from '../../img/Imam Hossain.jpg';
import img35 from '../../img/Jannatul Ferdous.jpg';
import img36 from '../../img/Kifayat Rahman.jpg';
import img37 from '../../img/Labonno Azad.jpg';
import img38 from '../../img/Mahi Ashraf.jpg';
import img39 from '../../img/Maksuda Hasan.jpg';
import img40 from '../../img/Rafsan Rafi.jpg';
import img41 from '../../img/Rashedul Islam.jpg';
import img42 from '../../img/Redowan Ahmed-01.jpg';
import img43 from '../../img/Samia Tabassum.jpg';
import img44 from '../../img/Samin Zarif.jpg';
import img45 from '../../img/Shifatus Saleheen.jpg';
import img46 from '../../img/SK Abu Labib-01.jpg';
import img47 from '../../img/Tanjim Tasnia.jpg';
import img48 from '../../img/Tanvir Hasan.jpg';
import img49 from '../../img/Tunazzina Tory.jpg';
import img50 from '../../img/Wasee Ahmed.jpg';

import img51 from '../../img/Abid Muntasir.jpg';
import img52 from '../../img/Tajish Farhan.jpg';
import img53 from '../../img/Nadira Tabassum.jpg';
import img54 from '../../img/Arnob Shahriar.jpg';
import img55 from '../../img/Tasnim Tabassum.jpg';
import img56 from '../../img/Anika Hasan.jpg';
import img57 from '../../img/Azizur Rahaman.jpg';
import img58 from '../../img/Farhan Sadik.jpg';
import img59 from '../../img/Humayra Tabassum.jpg';
import img60 from '../../img/Efty Shams.jpg';
import img61 from '../../img/Ismam Ahmed.jpg';
import img62 from '../../img/Jakia Sultana.jpg';
import img63 from '../../img/Meherun Nisa.jpg';
import img64 from '../../img/Mim Akter.jpg';
import img65 from '../../img/Mumtahina Rahman.jpg';
import img66 from '../../img/Mintasir Rahman.jpg';
import img67 from '../../img/Nurjahan Akter.jpg';
import img68 from '../../img/Noor Mohammad.jpg';
import img69 from '../../img/Nowshin Tasfia.jpg';
import img70 from '../../img/Afia Zahin.jpg';
import img71 from '../../img/Nusrat Majumdar.jpg';
import img72 from '../../img/Sayem Bhuiyan.jpg';
import img73 from '../../img/Shafaat Khan.jpg';
import img74 from '../../img/Shahab Uddin.jpg';
import img75 from '../../img/Sumaiya Sultana.jpg';

import img76 from '../../img/Abid Hossain.jpg';
import img77 from '../../img/Abu Bakar.jpg';
import img78 from '../../img/Akaeid Adib.jpg';
import img79 from '../../img/Zahid Hasan.jpg';
import img80 from '../../img/Arif Hossain.jpg';
import img81 from '../../img/Arnab Kabir.jpg';
import img82 from '../../img/Bibek Podder.jpg';
import img83 from '../../img/Fahim Faiya.jpg';
import img84 from '../../img/Hamidur Nabi.jpg';
import img85 from '../../img/Hasibul Hasan.jpg';
import img86 from '../../img/Hridoy Mahmud.jpg';
import img87 from '../../img/Jawadul Islam.jpg';
import img88 from '../../img/Jayed Hossain.jpg';
import img89 from '../../img/Masrur Efti.jpg';
import img90 from '../../img/Mehedi Hasan.jpg';
import img91 from '../../img/Mortaza Hussain.jpg';
import img92 from '../../img/Zeti Sikder.jpg';
import img93 from '../../img/Nabil Hyder.jpg';
import img94 from '../../img/Nasir Uddin.jpg';
import img95 from '../../img/Parvej Ahmed.jpg';
import img96 from '../../img/Roshan Abtahi.jpg';
import img97 from '../../img/Tahmidul Azam.jpg';
import img98 from '../../img/Tanvirul Islam.jpg';
import img99 from '../../img/Taosif Yasar.jpg';
import img100 from '../../img/Uzma Islam.jpg';

import img101 from '../../img/Atikur Rahman.jpg';
import img102 from '../../img/Esrat Jahan.jpg';
import img103 from '../../img/Farjana Sultana.jpg';
import img104 from '../../img/Ifat Khan.jpg';
import img105 from '../../img/Khaledur Rahman.jpg';
import img106 from '../../img/Lamisa Mashiyat.jpg';
import img107 from '../../img/Mitun Biswas.jpg';
import img108 from '../../img/Nahid Alam.jpg';
import img109 from '../../img/Nusrat Tanima.jpg';
import img110 from '../../img/Rufsun Rahman.jpg';
import img111 from '../../img/Sajid Maruf.jpg';
import img112 from '../../img/Sanjana Chowdhury.jpg';
import img113 from '../../img/Shahriar Hossain.jpg';
import img114 from '../../img/Shahrier Ismail.jpg';
import img115 from '../../img/Shihad Shahoriare.jpg';

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

    const gallery4 = [
        {
            id: 26,
            imgSrc: img76,
        },
        {
            id: 77,
            imgSrc: img77,
        },
        {
            id: 78,
            imgSrc: img78,
        },
        {
            id: 79,
            imgSrc: img79,
        },
        {
            id: 80,
            imgSrc: img80,
        },
        {
            id: 81,
            imgSrc: img81,
        },
        {
            id:82,
            imgSrc: img82,
        },
        {
            id: 83,
            imgSrc: img83,
        },
        {
            id: 84,
            imgSrc: img84,
        },
        {
            id: 85,
            imgSrc: img85,
        },
        {
            id: 86,
            imgSrc: img86,
        },
        {
            id: 87,
            imgSrc: img87,
        },
        {
            id: 88,
            imgSrc: img88,
        },
        {
            id: 89,
            imgSrc: img89,
        },
        {
            id: 90,
            imgSrc: img90,
        },
        {
            id: 91,
            imgSrc: img91,
        },
        {
            id: 92,
            imgSrc: img92,
        },
        {
            id: 93,
            imgSrc: img93,
        },
        {
            id: 94,
            imgSrc: img94,
        },
        {
            id: 95,
            imgSrc: img95,
        },
        {
            id: 96,
            imgSrc: img96,
        },
        {
            id: 97,
            imgSrc: img97,
        },
        {
            id: 98,
            imgSrc: img98,
        },
        {
            id: 99,
            imgSrc: img99,
        },
        {
            id: 100,
            imgSrc: img100,
        },
    ]

    const gallery5 = [
        {
            id: 101,
            imgSrc: img101,
        },
        {
            id: 102,
            imgSrc: img102,
        },
        {
            id: 103,
            imgSrc: img103,
        },
        {
            id: 104,
            imgSrc: img104,
        },
        {
            id: 105,
            imgSrc: img105,
        },
        {
            id: 106,
            imgSrc: img106,
        },
        {
            id: 107,
            imgSrc: img107,
        },
        {
            id: 108,
            imgSrc: img108,
        },
        {
            id: 109,
            imgSrc: img109,
        },
        {
            id: 110,
            imgSrc: img110,
        },
        {
            id: 111,
            imgSrc: img111,
        },
        {
            id: 112,
            imgSrc: img112,
        },
        {
            id: 113,
            imgSrc: img113,
        },
        {
            id: 114,
            imgSrc: img114,
        },
        {
            id: 115,
            imgSrc: img115,
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
                items: 5,
            },
        },
    }

    return (
        <>
            <section className="top-videos mt-100" id="star">
			<Container className="c_custom">
				<Row>

                    <h2 className="pb-5 medi-40"><span className="c-tag-1">Campus <mark className="mark">Stars</mark></span></h2>

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

                    <Col lg={12} className="mt-5">
						<div className="outer">
							<OwlCarousel id="big" className="owl-theme" items={1} loop autoplay={true} responsive={state.responsive} nav={true}>
								
								{
                                    gallery4.map((item) => (

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
                                    gallery5.map((item) => (

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