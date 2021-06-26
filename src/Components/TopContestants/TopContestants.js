import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';  
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';  
import c1 from '../../img/c1.jpg';
import c2 from '../../img/c2.jpg';
import c3 from '../../img/c3.jpg';
import c4 from '../../img/c4.jpg';
import c5 from '../../img/c5.jpg';
import c6 from '../../img/c6.jpg';
import './TopContestants.css';

const TopContestants = () => {

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
            <section className="top-videos mt-200" id="topVideos">
			<Container className="c_custom">
				<Row>

                    <h2 className="pb-5 medi-40"><span className="c-tag-2">Top <mark className="mark c-tag-3">Videos</mark></span></h2>

					<Col lg={12}>
						<div className="outer">
							<OwlCarousel id="big" className="owl-theme" items={1} loop autoplay={true} responsive={state.responsive} nav={true}>
								<div className="item">
                                    <Row>
										<Col xl={7} className="offset-xl-1">
											<div className="video_item">
												<LazyLoadImage effect="blur" src={c2} alt="Image1"/>
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
								<div className="item">
									<Row>
										<Col xl={7} className="offset-xl-1">
											<div className="video_item">
                                                <LazyLoadImage effect="blur" src={c2} alt="Image2"/>
											</div>
										</Col>

										<Col xl={3} className="d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3 className="semi-40">Contastant #1</h3>
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
								<div className="item">
									<Row>
										<Col xl={7} className="offset-xl-1">
											<div className="video_item">
                                                <LazyLoadImage effect="blur" src={c3} alt="Image3"/>
											</div>
										</Col>

										<Col xl={3} className="d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3 className="semi-40">Contastant #1</h3>
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
								<div className="item">
									<Row>
										<Col xl={7} className="offset-xl-1">
											<div className="video_item">
                                                <LazyLoadImage effect="blur" src={c4} alt="Image4"/>
											</div>
										</Col>

										<Col xl={3} className="d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3 className="semi-40">Contastant #1</h3>
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
								<div className="item">
									<Row>
										<Col xl={7} className="offset-xl-1">
											<div className="video_item">
                                                <LazyLoadImage effect="blur" src={c5} alt="Image5"/>
											</div>
										</Col>

										<Col xl={3} className="d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3 className="semi-40">Contastant #1</h3>
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
								<div className="item">
									<Row>
										<Col xl={7} className="offset-xl-1">
											<div className="video_item">
                                                <LazyLoadImage effect="blur" src={c1} alt="Image6"/>
											</div>
										</Col>

										<Col xl={3} className="d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3 className="semi-40">Contastant #1</h3>
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
								<div className="item">
									<Row>
										<Col xl={7} className="offset-xl-1">
											<div className="video_item">
                                                <LazyLoadImage effect="blur" src={c6} alt="Image7"/>
											</div>
										</Col>

										<Col xl={3} className="d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3 className="semi-40">Contastant #1</h3>
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