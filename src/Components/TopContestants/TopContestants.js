import React from 'react';
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

                    <h2 className="pb-5"><span className="c-tag-2">Top <mark className="mark c-tag-3">Videos</mark></span></h2>

					<Col lg={12}>
						<div className="outer">
							<OwlCarousel id="big" className="owl-theme" items={1} loop autoplay={false} responsive={state.responsive} nav={true}>
								<div className="item">
                                    <Row>
										<div className="col-lg-7 offset-lg-1">
											<div className="video_item">
												{/* <iframe title="" src="https://www.youtube.com/embed/IUN664s7N-c" frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen></iframe> */}

												<img src={c2} alt="Image1"/>
											</div>
										</div>

										<div className="col-lg-3 d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3>Contastant #1</h3>
												<p>John Doe, Dhaka University</p>

												<ul>
													<li>Lorem ipsum dolor sit amet.</li>
													<li>Lorem ipsum dolor sit amet.</li>
												</ul>

												<div className="call-to-act py-5">
													<a href="http://www.nsusportscarnival.com" className="px-5 py-3" target="_blank" rel="noreferrer">
														<span> Vote Now </span>
													</a>
												</div>
											</div>
										</div>
									</Row>
								</div>
								<div className="item">
									<div className="row">
										<div className="col-lg-7 offset-lg-1">
											<div className="video_item">
												{/* <iframe title="frame1" src="https://www.youtube.com/embed/StiRpYIIjYk" frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen></iframe> */}

                                                <img src={c2} alt="Image2"/>
											</div>
										</div>

										<div className="col-lg-3 d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3>Contastant #1</h3>
												<p>John Doe, Dhaka University</p>

												<ul>
													<li>Lorem ipsum dolor sit amet.</li>
													<li>Lorem ipsum dolor sit amet.</li>
												</ul>

												<div className="call-to-act py-5">
													<a href="http://www.nsusportscarnival.com" className="px-5 py-3" target="_blank" rel="noreferrer">
														<span> Vote Now </span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="row">
										<div className="col-lg-7 offset-lg-1">
											<div className="video_item">
												{/* <iframe title="frame2" src="https://www.youtube.com/embed/r5_wTbk16RQ" frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen></iframe> */}

                                                <img src={c3} alt="Image3"/>
											</div>
										</div>

										<div className="col-lg-3 d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3>Contastant #1</h3>
												<p>John Doe, Dhaka University</p>

												<ul>
													<li>Lorem ipsum dolor sit amet.</li>
													<li>Lorem ipsum dolor sit amet.</li>
												</ul>

												<div className="call-to-act py-5">
													<a href="http://www.nsusportscarnival.com" className="px-5 py-3" target="_blank" rel="noreferrer">
														<span> Vote Now </span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="row">
										<div className="col-lg-7 offset-lg-1">
											<div className="video_item">
												{/* <iframe title="frame3" src="https://www.youtube.com/embed/PxuKDYNxRF8" frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen></iframe> */}

                                                <img src={c4} alt="Image4"/>
											</div>
										</div>

										<div className="col-lg-3 d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3>Contastant #1</h3>
												<p>John Doe, Dhaka University</p>

												<ul>
													<li>Lorem ipsum dolor sit amet.</li>
													<li>Lorem ipsum dolor sit amet.</li>
												</ul>

												<div className="call-to-act py-5">
													<a href="http://www.nsusportscarnival.com" className="px-5 py-3" target="_blank" rel="noreferrer">
														<span> Vote Now </span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="row">
										<div className="col-lg-7 offset-lg-1">
											<div className="video_item">
												{/* <iframe title="frame4" src="https://www.youtube.com/embed/OZiLAEXX6i4" frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen></iframe> */}

                                                <img src={c5} alt="Image5"/>
											</div>
										</div>

										<div className="col-lg-3 d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3>Contastant #1</h3>
												<p>John Doe, Dhaka University</p>

												<ul>
													<li>Lorem ipsum dolor sit amet.</li>
													<li>Lorem ipsum dolor sit amet.</li>
												</ul>

												<div className="call-to-act py-5">
													<a href="http://www.nsusportscarnival.com" className="px-5 py-3" target="_blank" rel="noreferrer">
														<span> Vote Now </span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="row">
										<div className="col-lg-7 offset-lg-1">
											<div className="video_item">
												{/* <iframe title="frame5" src="https://www.youtube.com/embed/NFFE72ib7KQ" frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen></iframe> */}

                                                <img src={c1} alt="Image6"/>
											</div>
										</div>

										<div className="col-lg-3 d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3>Contastant #1</h3>
												<p>John Doe, Dhaka University</p>

												<ul>
													<li>Lorem ipsum dolor sit amet.</li>
													<li>Lorem ipsum dolor sit amet.</li>
												</ul>

												<div className="call-to-act py-5">
													<a href="http://www.nsusportscarnival.com" className="px-5 py-3" target="_blank" rel="noreferrer">
														<span> Vote Now </span>
													</a>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="row">
										<div className="col-lg-7 offset-lg-1">
											<div className="video_item">
												{/* <iframe title="frame6" src="https://www.youtube.com/embed/PxuKDYNxRF8" frameborder="0"
													allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
													allowFullScreen></iframe> */}

                                                <img src={c6} alt="Image7"/>
											</div>
										</div>

										<div className="col-lg-3 d-flex justify-content-center align-items-center">
											<div className="video_con">
												<h3>Contastant #1</h3>
												<p>John Doe, Dhaka University</p>

												<ul>
													<li>Lorem ipsum dolor sit amet.</li>
													<li>Lorem ipsum dolor sit amet.</li>
												</ul>

												<div className="call-to-act py-5">
													<a href="http://www.nsusportscarnival.com" className="px-5 py-3" target="_blank" rel="noreferrer">
														<span> Vote Now </span>
													</a>
												</div>
											</div>
										</div>
									</div>
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