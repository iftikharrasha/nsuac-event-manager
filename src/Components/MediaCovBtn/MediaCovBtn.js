import React from 'react';
import {
    Link
  } from "react-router-dom";

const MediaCovBtn = ({closeModal}) => {
    function activeToggle() {
        document.getElementById('navigation').classList.toggle('menuToggle');
        document.getElementById('hamburger').classList.toggle('backgrounColorToggle');
        document.getElementById('listItems').classList.toggle('show');
        document.getElementById('top').classList.toggle('top');
        document.getElementById('middle').classList.toggle('middle');
        document.getElementById('bottom').classList.toggle('bottom');
    }

    return (
        <Link to="/media-coverage" onClick={closeModal, activeToggle} className="navLink reg-24 text-uppercase">
            Media Coverage
        </Link>
    );
};

export default MediaCovBtn;



