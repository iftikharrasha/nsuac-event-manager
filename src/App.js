import React from "react";
// import {Helmet} from "react-helmet";
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import './App.css';
import Achievments from './Components/Achievments/Achievments';
import Intro from './Components/Inro/Intro';
import Registration from './Components/Registration/Registration';
import SegmentsSlider from './Components/SegmentsSlider/SegmentsSlider';
import MediaPartners from './Components/MediaPartners/MediaPartners';
import Footer from "./Components/Footer/Footer";
import SchedulesTable from "./Components/SchedulesTable/SchedulesTable";
import Map from "./Components/Map/Map";
import TopContestants from "./Components/TopContestants/TopContestants";

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
        <SchedulesTable></SchedulesTable>
        <Registration></Registration>
        <TopContestants></TopContestants>
        <SegmentsSlider></SegmentsSlider>
        <MediaPartners></MediaPartners>
        <Map></Map>
        <Footer></Footer>
    </div>
  );
}

export default App;
