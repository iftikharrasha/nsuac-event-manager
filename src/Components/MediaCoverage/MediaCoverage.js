import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import poster from '../../img/poster.svg';
import tbs_thumb from '../../img/tbs-thumb.jpg';
import shomokal_thumb from '../../img/shomokal-thumb.jpg';
import kalerkonto_thumb from '../../img/kalerkonto-thumb.jpg';
import bd24live_thumb from '../../img/bd24live-thumb.jpg';
import dhakapost_thumb from '../../img/dhakapost-thumb.jpg';
import newsbangla_thumb from '../../img/newsbangla-thumb.jpg';
import risingbd_thumb from '../../img/risingbd-thumb.jpg';

const MediaCoverage = () => {
    return (
        <>
            <section className="programs pt-100" id="schedules">
                    <div className="cover">
                        <div className="container mb-5">
                            <div className="row">
                                <div className="col-12 overflowX">
                                    <h3 className="c-tag-2 semi-28" data-aos="fade-down" data-aos-duration="1000">Media Coverage</h3>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a className="lit-20 c-tag-1" href="index.php">Battle of Skills</a></li>
                                            <li className="breadcrumb-item active lit-20 c-tag-1" aria-current="page">Broadcasts</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="program-wrapper">
                        <div className="container mb-5">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="c-tag-1 semi-40 text-center">Jamuna TV</h3>
                                    <div className="row">
                                        <Col lg={12} className="mt-lg-3 mt-5">
                                            <div className="teaser-video">
                                                <iframe id="youtube" src="https://www.youtube.com/embed/reRr1Fabagk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        </Col>
                                    </div>
                                </div>

                                <div className="col-12 mt-150">
                                    <h3 className="c-tag-1 semi-40 text-center">Radio Today 89.6fm</h3>
                                    <div className="row">
                                        <Col lg={12} className="mt-lg-3 mt-5">
                                            <div className="teaser-video" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                                                <iframe id="youtube" src="https://www.youtube.com/embed/Ms4HpVJRByM" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                            </div>
                                        </Col>
                                    </div>
                                </div>

                                <div className="col-12 mt-150">
                                    <h3 className="c-tag-1 semi-40 text-center">The Business Standard</h3>
                                    <div className="row">
                                        <Col lg={12} className="mt-lg-3 mt-5">
                                            <div className="news-thumb" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                                                <a href="https://www.tbsnews.net/bangladesh/education/nsu-athletics-club-launches-bangabandhu-battle-skills-2021-312730" target="_blank" rel="noreferrer"><img src={tbs_thumb} alt="tbs-thumb" className="img-fluid"/></a>
                                            </div>
                                        </Col>
                                    </div>
                                </div>

                                <div className="col-12 mt-150">
                                    <h3 className="c-tag-1 semi-40 text-center">The Daily Samakal</h3>
                                    <div className="row">
                                        <Col lg={12} className="mt-lg-3 mt-5">
                                            <div className="news-thumb" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                                                <a href="https://samakal.com/capital/article/211080808/%E0%A6%A8%E0%A6%B0%E0%A7%8D%E0%A6%A5-%E0%A6%B8%E0%A6%BE%E0%A6%89%E0%A6%A5-%E0%A6%87%E0%A6%89%E0%A6%A8%E0%A6%BF%E0%A6%AD%E0%A6%BE%E0%A6%B0%E0%A7%8D%E0%A6%B8%E0%A6%BF%E0%A6%9F%E0%A6%BF%E0%A6%B0-%E0%A6%AC%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A7%E0%A7%81-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%9F%E0%A7%87%E0%A6%B2-%E0%A6%85%E0%A6%AC-%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A6%BF%E0%A6%B2%E0%A6%B8%E0%A6%B0-%E0%A6%B0%E0%A7%87%E0%A6%9C%E0%A6%BF%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A6%A8-%E0%A6%9A%E0%A6%B2%E0%A6%9B%E0%A7%87" target="_blank" rel="noreferrer"><img src={shomokal_thumb} alt="shomokal_thumb" className="img-fluid"/></a>
                                            </div>
                                        </Col>
                                    </div>
                                </div>

                                <div className="col-12 mt-150">
                                    <h3 className="c-tag-1 semi-40 text-center">Kalerkantho</h3>
                                    <div className="row">
                                        <Col lg={12} className="mt-lg-3 mt-5">
                                            <div className="news-thumb" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                                                <a href="https://www.kalerkantho.com/online/miscellaneous/2021/10/07/1080835?fbclid=IwAR28yYgOsim1Xosz22_GcochF_Sd0nu3e_kSNoVgL3y7OdjfaaUeYgepP94" target="_blank" rel="noreferrer"><img src={kalerkonto_thumb} alt="kalerkonto_thumb" className="img-fluid"/></a>
                                            </div>
                                        </Col>
                                    </div>
                                </div>

                                <div className="col-12 mt-150">
                                    <h3 className="c-tag-1 semi-40 text-center">bd24live.com</h3>
                                    <div className="row">
                                        <Col lg={12} className="mt-lg-3 mt-5">
                                            <div className="news-thumb" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                                                <a href="https://www.bd24live.com/bangla/402827/?fbclid=IwAR0-CXsvslBpRaRAMzW703B8UsaBi40-aPRXzSTgsTF9ZaePbv6DzERMFRU" target="_blank" rel="noreferrer"><img src={bd24live_thumb} alt="bd24live_thumb" className="img-fluid"/></a>
                                            </div>
                                        </Col>
                                    </div>
                                </div>

                                <div className="col-12 mt-150">
                                    <h3 className="c-tag-1 semi-40 text-center">Dhaka Post</h3>
                                    <div className="row">
                                        <Col lg={12} className="mt-lg-3 mt-5">
                                            <div className="news-thumb" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                                                <a href="https://en.dhakapost.com/sports/others/1390" target="_blank" rel="noreferrer"><img src={dhakapost_thumb} alt="dhakapost_thumb" className="img-fluid"/></a>
                                            </div>
                                        </Col>
                                    </div>
                                </div>

                                <div className="col-12 mt-150">
                                    <h3 className="c-tag-1 semi-40 text-center">News Bangla 24</h3>
                                    <div className="row">
                                        <Col lg={12} className="mt-lg-3 mt-5">
                                            <div className="news-thumb" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                                                <a href="https://www.newsbangla24.com/news/163359/The-last-is-the-North-South-University-sports-competition?fbclid=IwAR2FQBEgG6dFb360NLUCx-pOg5tYL1avmzEdrtXb-lRcTcq9MBoPDqsYeas" target="_blank" rel="noreferrer"><img src={newsbangla_thumb} alt="newsbangla_thumb" className="img-fluid"/></a>
                                            </div>
                                        </Col>
                                    </div>
                                </div>

                                <div className="col-12 mt-150">
                                    <h3 className="c-tag-1 semi-40 text-center">Rising BD</h3>
                                    <div className="row">
                                        <Col lg={12} className="mt-lg-3 mt-5">
                                            <div className="news-thumb" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="1000">
                                                <a href="https://www.risingbd.com/campus/news/430842?fbclid=IwAR2oPfb4LwRZIP5ekDF5EllkXEB8aw1vqhw6uGQuyd14Jyt0CEJuPb4hv5M" target="_blank" rel="noreferrer"><img src={risingbd_thumb} alt="newsbangla_thumb" className="img-fluid"/></a>
                                            </div>
                                        </Col>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    );
};

export default MediaCoverage;