import React from 'react';
import './Segment.css';

const Segment = () => {
    return (
        <>
                <div className="segment-item">
                    <article className="segment">
                        <div className="segment-img"> 
                            <img className="img-fluid" src="https://w5.foxthemes.me/xtrm/wp-content/uploads/2018/09/group-6.jpg" alt="segment"/>
                            <ul className="seg-name">
                                <li>
                                    <p className="">Basketball</p>
                                </li>
                            </ul>
                         </div>
                        <div className="seg-details">
                            <h3 className="c-tag-1">
                                Bryce Canyon A Stunning Us Travel Destination
                            </h3>
                        </div>
                    </article>
                </div>
        </>
    );
};

export default Segment;