import React from 'react';
import {
    Link
  } from "react-router-dom";

const CampusStarBtn = ({closeModal}) => {
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
            <Link to="/campus-star/en" onClick={closeModal}>
                <span>Campus Star</span>
            </Link>
        </>
    );
};

export default CampusStarBtn;