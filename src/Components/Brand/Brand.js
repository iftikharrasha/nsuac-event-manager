import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import logo from '../../img/bos.svg';

const Brand = () => {
    return (
        <>
            <Link to="/" className="navbar-brand">
                {/* <LazyLoadImage effect="blur" src={logo} className="img-fluid" alt="bos"/> */}
                <span className="medi-30 pt-2 c-tag-2">BBS'21</span>
            </Link>
        </>
    );
};

export default Brand;