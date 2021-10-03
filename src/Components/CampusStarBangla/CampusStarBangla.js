import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import './CampusStarBangla.css';
  import poster from '../../img/Campus-Star.jpg';
import StarsGallery from '../StarsGallery/StarsGallery';

const CampusStarBangla = () => {
    return (
        <>
            <section className="campusStar pt-150">
                <Container>
                    <Row className="row">
                        <Col sm={10} className="pb-sm-5 pb-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/home" className="medi-15 c-tag-1" >Bangabandhu Battle of Skills 2021</Link>
                                    </li>
                                    <li className="breadcrumb-item active medi-15 c-tag-1 c-tag-1" aria-current="page">Campus Star</li>
                                </ol>
                            </nav>
                        </Col>
                        <Col sm={2} className="pb-sm-5 pb-0">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb justify-content-center">
                                    <li className="breadcrumb-item">
                                        <Link to="/campus-star/en" className="medi-15 c-tag-1" href="index.html">
                                            <img src="https://lipis.github.io/flag-icon-css/flags/4x3/um.svg" alt="usa-flag"/>
                                            <span className="lang-txt">EN</span>
                                        </Link>
                                    </li>
                                </ol>
                            </nav>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col className="pb-5">
                            <div className="pt-4 pb-3">
                                <h2 className="pt-30 c-tag-1 semi-28">বিবিএসের জন্য ক্যাম্পাস স্টার নিয়োগ চলছে!
                                </h2>
                                <p className="pt-3 c-tag-1 lit-18">ক্যাম্পাস স্টার হিসাবে বাংলাদেশের বৃহত্তম অনলাইন ক্রীড়া দক্ষতা প্রতিযোগিতায় যোগ দিন !! ইভেন্টের সহায়ক হয়ে উঠুন এবং খেলাধুলার প্রতি আপনার ভালবাসা দেখান !!!</p>

                                <div className="text-center my-5">
                                    <img src={poster} alt="poster" className="img-fluid w-50"/>
                                </div>

                                <p className="pt-3 c-tag-1 lit-18">নর্থ সাউথ ইউনিভার্সিটি অ্যাথলেটিক্স ক্লাব আয়োজিত এবং এনএসইউ কর্তৃপক্ষের প্রত্যক্ষ তত্ত্বাবধানে বঙ্গবন্ধু ব্যাটাল অফ স্কিলস ২০২১ এই ধরনের প্রথম অনুষ্ঠান হবে। এটি সম্ভাব্য খেলোয়াড়দের কৌতুক করার একটি প্ল্যাটফর্ম তৈরি করবে এবং সারা দেশে একটি বিশাল হাইপ এবং উত্তেজনা তৈরি করবে। ইভেন্টটি বিভিন্ন খেলাধুলার দক্ষ ইভেন্টগুলিতে উপভোগ করতে এবং অংশ নিতে উত্সবে মেজাজ সরবরাহ করে offer এই ইভেন্টটি সারা দেশে 12 থেকে 30 বছর বয়সের মধ্যে সমস্ত শিক্ষার্থীদের জন্য উন্মুক্ত থাকবে। এনএসইউএসিটির লক্ষ্য হল অন্য স্বাদে খেলা উপভোগ করার একটি নতুন যুগের সূচনা।</p>

                                <h3 className="py-5 c-tag-1 medi-30 text-center">" খেলোয়াড় নয় !!! কোনও উদ্বেগ নেই। প্লে মেকার হোন। "</h3>

                                <p className="pt-3 c-tag-1 lit-18">নর্থ সাউথ ইউনিভার্সিটি অ্যাথলেটিক্স ক্লাব স্কিলস ক্যাম্পাস স্টারের বঙ্গবন্ধু ব্যাটল নিয়োগের মাধ্যমে প্লেমেকারের জন্য দুর্দান্ত সুযোগ দিচ্ছে।</p>

                                <p className="pt-3 c-tag-1 lit-18">এটি একটি ১৫ দিনের ক্যাম্পাস স্টার প্রোগ্রাম যা সমগ্র বাংলাদেশ জুড়ে বিশ্ববিদ্যালয়, কলেজ এবং স্কুল ছাত্রদের প্রশাসনিক তদারকি, ব্যাপক নেতৃত্ব এবং ক্রীড়া সংস্কৃতির আকর্ষণীয় বিশ্বের সাথে সম্পর্কিত সমস্ত কিছু শিখতে সক্ষম করে। বিশ্ববিদ্যালয়, কলেজ এবং স্কুল ছাত্র যারা প্রভাবশালী ক্যারিশমা রয়েছে এবং ক্রীড়া সম্পর্কিত ইভেন্ট সম্পর্কে আরও জানতে আগ্রহী, তদুপরি, বিশ্ববিদ্যালয় ক্লাবগুলির ইভেন্টের আয়োজনের ক্রিয়াকলাপটি অনুসন্ধান করতে আগ্রহী এবং একই সাথে তাদের বাস্তবায়িত দেখার জন্য অনন্য ধারণা উত্সাহিত করার জন্য উত্সাহিত হয় বঙ্গবন্ধু যুদ্ধের দক্ষতা ক্যাম্পাস স্টার প্রোগ্রামের জন্য।</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <iframe width="100%" height="600" src="https://www.youtube.com/embed/BQf5EWap5xw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Row>
                    <Row className="row">
                        <Col className="pb-5">
                            <div className="pt-4 pb-3">
                                <h2 className="pt-30 c-tag-1 semi-28">একটি ক্যাম্পাস স্টারের অবশ্যই থাকতে হবে:
                                    </h2>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>1. </span>নেতৃত্বের দক্ষতা</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>2. </span>প্রত্যয়ী ক্ষমতা</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>3. </span>প্রতিক্রিয়া সংগ্রহ করার এবং একই সাথে অভ্যন্তরীণ সরবরাহ করার ক্ষমতা থাকতে হবে</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>4. </span>পেশাদারিত্ব</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>5. </span>অভিজ্ঞতা</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>6. </span>যোগাযোগের দক্ষতা আরও ভাল</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>7. </span>ভাল সামাজিক মিডিয়া উপস্থিতি (ফেসবুকে 2000 এরও বেশি বন্ধু থাকতে হবে, তার নিজস্ব ক্যাম্পাস সম্পর্কিত ফেসবুক গ্রুপ বা পৃষ্ঠা থাকলেই ভাল হয়))</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>8. </span>নিজস্ব ক্যাম্পাস সোশ্যাল মিডিয়া গ্রুপগুলিতে গুরুত্বপূর্ণ ভূমিকা নিতে হবে</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>9. </span>আধুনিক সামাজিক মিডিয়া প্রযুক্তি দিয়ে সৃজনশীল হতে হবে</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col className="pb-5">
                            <div className="pt-4 pb-3">
                                <h2 className="pt-30 c-tag-1 semi-28">দক্ষতা ক্যাম্পাস স্টারের বঙ্গবন্ধু যুদ্ধ হওয়ার সুবিধা:
                                    </h2>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>1. </span>স্বীকৃতি শংসাপত্র</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>2. </span>সোশ্যাল মিডিয়া স্বীকৃতি</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>3. </span>ইভেন্ট টি-শার্ট</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>4. </span>বাংলাদেশের স্পোর্টস স্টারস স্বাক্ষরিত স্মরণিকা</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>5. </span>ভবিষ্যতে বিডিতে টিম এনএসইউসি / কিছু নামী প্রতিষ্ঠানের সাথে কাজ করার সুযোগ</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col className="pb-5">
                            <div className="pt-4 pb-3">
                                <h2 className="pt-30 c-tag-1 semi-28">একটি ক্যাম্পাস স্টার হিসাবে দায়িত্ব:
                                    </h2>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>1. </span>নিজস্ব ক্যাম্পাসের বিভিন্ন সামাজিক মিডিয়া গ্রুপগুলিতে ইভেন্ট ক্রিয়াকলাপ প্রচার করুন</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>2. </span>ইভেন্টটির জন্য দর্শকদের বৃদ্ধি করুন</p>
                                <p className="pl-3 pl-sm-5 m-0 pt-3 c-tag-1 lit-18"><span>3. </span>ইভেন্টগুলির জন্য অংশগ্রহণকারীদের বাড়ান</p>

                                <p className="pt-3 c-tag-1 lit-18">আপনি যদি মনে করেন যে আপনি একটি ক্যাম্পাস তারকা হিসাবে আপনার প্রতিষ্ঠানের প্রতিনিধিত্ব করে সম্মান ও মর্যাদাকে ধরে রাখতে যথেষ্ট সক্ষম হন তবে আপনি কেবল এক ধাপ দূরে রয়েছেন, athletics.club@northsouth.edu -তে বর্ণিত সমস্ত প্রয়োজনীয় বিবরণ সহ আমাদের মেইল ​​করুন । একটি অ্যাপয়েন্টমেন্টের পরে একটি সংক্ষিপ্ত সাক্ষাত্কারের জন্য আমরা যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করব !!!! সুতরাং, আপনার সুযোগটি দখল করুন এবং এখনই আবেদন করুন।</p>

                                <div className="pt-5 call-to-act mt-2 text-sm-center">
                                        <a className="disabled">
                                            <span> Become a Campus Star!</span>
                                        </a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <StarsGallery></StarsGallery>
            </section>
        </>
    );
};

export default CampusStarBangla;