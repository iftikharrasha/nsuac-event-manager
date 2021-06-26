import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Segment.css';

const Segment = (props) => {
    const {name, img, detail, key} = props.segment;

    return (
        <>
                <div className="segment-item">
                    <article className="segment">
                        <div className="segment-img"> 
                            <LazyLoadImage effect="blur" className="img-fluid" src={img} alt="segment"/>
                            <ul className="seg-name">
                                <li>
                                    <p>{name}</p>
                                </li>
                            </ul>
                         </div>
                        <div className="seg-details">
                            <h3 className="c-tag-1 lit-18">
                                {detail}
                            </h3>
                        </div>
                    </article>
                </div>
        </>
    );
};

export default Segment;