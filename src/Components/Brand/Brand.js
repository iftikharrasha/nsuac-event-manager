import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import logo from '../../img/bos.svg';

const Brand = () => {
    return (
        <>
            <Link to="/" className="navbar-brand">
                <img src={logo} className="img-fluid" alt="bos"/>
            </Link>
        </>
    );
};

export default Brand;