import React from "react";
// import {Helmet} from "react-helmet";
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import './App.css';
import Achievments from './Components/Achievments/Achievments';
import Intro from './Components/Inro/Intro';
import Schedules from './Components/Schedules/Schedules';
import Registration from './Components/Registration/Registration';
import SegmentsSlider from './Components/SegmentsSlider/SegmentsSlider';
import MediaPartners from './Components/MediaPartners/MediaPartners';
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        {/* <Helmet>
            <script src="./icons/font-awesome.min.js" />
        </Helmet> */}

        <Header></Header>
        <Hero></Hero>
        <Achievments></Achievments>
        <Intro></Intro>
        <SegmentsSlider></SegmentsSlider>
        <Schedules></Schedules>
        <Registration></Registration>
        <MediaPartners></MediaPartners>
        <Footer></Footer>
    </div>
  );
}

export default App;
