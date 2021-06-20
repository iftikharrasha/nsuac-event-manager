import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import OwlCarousel from 'react-owl-carousel';  
import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';  
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';  
import c1 from '../../img/c1.png';
import c2 from '../../img/c2.png';
import c3 from '../../img/c3.png';
import c4 from '../../img/c4.png';
import c5 from '../../img/c5.png';
import c6 from '../../img/c6.png';
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

										<div className="col-lg-3">
											<div className="video_con">
												<h3>Marketing Consulting</h3>
												<p>Discover specific opportunities for your business through creative
													marketing strategies and our signature bright ideas.</p>

												<ul>
													<li>Brand Exploration & Audits</li>
													<li>Competitor Analysis</li>
												</ul>
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

										<div className="col-lg-3">
											<div className="video_con">
												<h3>Branding/Rebranding</h3>
												<p>Tell your story through visuals and branding. We develop brand
													purpose which translates to business results.</p>

												<ul>
													<li>Creative Corporate Identity</li>
													<li>Brand Evolution & Refresh</li>
												</ul>
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

										<div className="col-lg-3">
											<div className="video_con">
												<h3>Web Development</h3>
												<p>Our websites are functional tools to further your commercial success
													and enhance your reach.</p>

												<ul>
													<li>Optimise & Customise Your Site</li>
													<li>Sell, Promote & Show Your Audience Who You Are</li>
												</ul>
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

										<div className="col-lg-3">
											<div className="video_con">
												<h3>Social Media Management</h3>
												<p>End-to-end service that manages the entire online community
													experience from post content creation to official responses on
													direct messages and comments.</p>

												<ul>
													<li>Custom Content Creation</li>
													<li>Optimized Paid Advertising</li>
												</ul>
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

										<div className="col-lg-3">
											<div className="video_con">
												<h3>Loyalty and Rewards Programmes</h3>
												<p>Discover specific opportunities for your business through creative
													marketing strategies and our signature bright ideas.</p>

												<ul>
													<li>Brand Exploration & Audits</li>
													<li>Competitor Analysis</li>
												</ul>
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

										<div className="col-lg-3">
											<div className="video_con">
												<h3>Productivity Management</h3>
												<p>Discover specific opportunities for your business through creative
													marketing strategies and our signature bright ideas.</p>

												<ul>
													<li>Brand Exploration & Audits</li>
													<li>Competitor Analysis</li>
												</ul>
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

										<div className="col-lg-3">
											<div className="video_con">
												<h3>Social Media Management</h3>
												<p>End-to-end service that manages the entire online community
													experience from post content creation to official responses on
													direct messages and comments.</p>

												<ul>
													<li>Custom Content Creation</li>
													<li>Optimized Paid Advertising</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</OwlCarousel>
							{/* <OwlCarousel id="thumbs" className="owl-theme" items={4} nav={true}>
								<div className="item">
									<div className="thumbnail_con">
										<div className="th_img">
											<img src={c2} alt="Image8"/>
										</div>
										<h4>Marketing Consulting</h4>
									</div>
								</div>
								<div className="item">
									<div className="thumbnail_con">
										<div className="th_img">
											<img src={c3} alt="Image9"/>
										</div>
										<h4>Branding/ Rebranding</h4>
									</div>
								</div>
								<div className="item">
									<div className="thumbnail_con">
										<div className="th_img">
											<img src={c4} alt="Image10"/>
										</div>
										<h4>Web Development</h4>
									</div>
								</div>
								<div className="item">
									<div className="thumbnail_con">
										<div className="th_img">
											<img src={c5} alt="Image11"/>
										</div>
										<h4> Social Media Management</h4>
									</div>
								</div>
								<div className="item">
									<div className="thumbnail_con">
										<div className="th_img">
											<img src={c1} alt="Image12"/>
										</div>
										<h4>Loyalty and Rewards Programmes</h4>
									</div>
								</div>
								<div className="item">
									<div className="thumbnail_con">
										<div className="th_img">
											<img src={c6} alt="Image13"/>
										</div>
										<h4>Productivity Management</h4>
									</div>
								</div>
								<div className="item">
									<div className="thumbnail_con">
										<div className="th_img">
											<img src={c3} alt="Image14"/>
										</div>
										<h4>Branding/ Rebranding</h4>
									</div>
								</div>

							</OwlCarousel> */}
						</div>
					</Col>
				</Row>
			</Container>
		</section>
        </>
    );
};

export default TopContestants;