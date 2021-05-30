import React from 'react';
import './Segment.css';

const Segment = (props) => {
    const {name, img, detail, key} = props.segment;

    return (
        <>
                <div className="segment-item">
                    <article className="segment">
                        <div className="segment-img"> 
                            <img className="img-fluid" src={img} alt="segment"/>
                            <ul className="seg-name">
                                <li>
                                    <p className="">{name}</p>
                                </li>
                            </ul>
                         </div>
                        <div className="seg-details">
                            <h3 className="c-tag-1">
                                {detail}
                            </h3>
                        </div>
                    </article>
                </div>
        </>
    );
};

export default Segment;