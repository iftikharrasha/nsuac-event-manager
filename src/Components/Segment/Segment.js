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



// [
//     {
//       "id": 1,
//       "key":"TTE1RTR57H",
//       "name": "Basketball",
//       "img":"https://i.ibb.co/mNwpPwd/basketball.png",
//       "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing."
//     },
//     {
//       "id": 2,
//       "key":"AV71RRTTYH",
//       "name": "Football",
//       "img":"https://i.ibb.co/Hxq3ykz/football.png",
//       "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing."
//     },
//     {
//       "id": 3,
//       "key":"BNSKRK8SFF",
//       "name": "Cricket",
//       "img":"https://i.ibb.co/q9f8NB9/cricket.png",
//       "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing."
//     },
//     {
//       "id": 4,
//       "key":"QU71TC8573",
//       "name": "Table Tennis",
//       "img":"https://i.ibb.co/DpNvqmK/table-tennis.png",
//       "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing."
//     },
//     {
//       "id": 5,
//       "key":"RM890385YR",
//       "name": "Cycle Stunt",
//       "img":"https://i.ibb.co/yNHwMQS/cycle.png",
//       "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing."
//     },
//     {
//       "id": 6,
//       "key":"CMS6R3876U",
//       "name": "Rubik's Cube",
//       "img":"https://i.ibb.co/Bgd0mSJ/rubik.png",
//       "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing."
//     },
//     {
//       "id": 7,
//       "key":"AMST888VY7",
//       "name": "Trick Shot",
//       "img":"https://i.ibb.co/YhqSp3G/carrom.png",
//       "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing."
//     },
//     {
//       "id": 8,
//       "key":"NNS55385YP",
//       "name": "Gymnastics",
//       "img":"https://i.ibb.co/LzbyHMr/gymnastic.png",
//       "detail": "Lorem ipsum dolor sit amet, consectetur adipisicing."
//     }
//   ]