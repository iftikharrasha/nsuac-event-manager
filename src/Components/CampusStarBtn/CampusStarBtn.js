import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const CampusStarBtn = () => {
    function activeToggle() {
        document.getElementById('navigation').classList.toggle('menuToggle');
        document.getElementById('hamburger').classList.toggle('backgrounColorToggle');
        document.getElementById('listItems').classList.toggle('show');
        document.getElementById('top').classList.toggle('top');
        document.getElementById('middle').classList.toggle('middle');
        document.getElementById('bottom').classList.toggle('bottom');
    }

    return (
        <>
            <Link to="/campus-star/en" onClick={activeToggle}>
                <span>Campus Star</span>
            </Link>
        </>
    );
};

export default CampusStarBtn;