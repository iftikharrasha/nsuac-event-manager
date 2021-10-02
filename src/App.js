import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import ScrollTop from './ScrollTop.js';
// import {Helmet} from "react-helmet";
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Achievments from './Components/Achievments/Achievments';
import Intro from './Components/Inro/Intro';
import Registration from './Components/Registration/Registration';
import SegmentsSlider from './Components/SegmentsSlider/SegmentsSlider';
import MediaPartners from './Components/MediaPartners/MediaPartners';
import Footer from "./Components/Footer/Footer";
import SchedulesTable from "./Components/SchedulesTable/SchedulesTable";
import Map from "./Components/Map/Map";
import TopContestants from "./Components/TopContestants/TopContestants";
import CampusStarEnglish from "./Components/CampusStarEnglish/CampusStarEnglish";
import CampusStarBangla from "./Components/CampusStarBangla/CampusStarBangla";
import Greetings from "./Components/Greetings/Greetings.js";
import Teaser from "./Components/Teaser/Teaser.js";
import StarsGallery from "./Components/StarsGallery/StarsGallery.js";

function App() {
  const display = "none";

  return (
    <div className="App">
        <Router>
            <ScrollTop>
                <Switch>
                    <Route path="/home">
                        <Header></Header>
                        <Hero></Hero>
                        <Greetings></Greetings>
                        <Teaser></Teaser>
                        <StarsGallery></StarsGallery>
                        <Registration></Registration>
                        <Achievments></Achievments>
                        <Map></Map>
                        <Footer></Footer>
                        {/*
                        <Intro></Intro>
                        <SchedulesTable></SchedulesTable>
                        <TopContestants></TopContestants>
                        <SegmentsSlider></SegmentsSlider>
                        <MediaPartners></MediaPartners>
                         */}
                        <ScrollToTop smooth/>
                    </Route>
                    <Route path="/campus-star/en">
                        <Header display={display}></Header>
                        <CampusStarEnglish></CampusStarEnglish>
                        <Map></Map>
                        <Footer></Footer>
                        <ScrollToTop smooth/>
                    </Route>
                    <Route path="/campus-star/bn">
                      <Header display={display}></Header>
                        <CampusStarBangla></CampusStarBangla>
                        <Map></Map>
                        <Footer></Footer>
                        <ScrollToTop smooth/>
                    </Route>
                    <Route exact path="/">
                        <Header></Header>
                        <Hero></Hero>
                        <Greetings></Greetings>
                        <Teaser></Teaser>
                        <StarsGallery></StarsGallery>
                        <Registration></Registration>
                        <Achievments></Achievments>
                        <Map></Map>
                        <Footer></Footer>
                        {/* <Intro></Intro>
                        <SchedulesTable></SchedulesTable>
                        <TopContestants></TopContestants>
                        <SegmentsSlider></SegmentsSlider>
                        <MediaPartners></MediaPartners>
                         */}
                        <ScrollToTop smooth/>
                    </Route>
                    <Route path="*">
                        
                    </Route>
                </Switch>
            </ScrollTop>
        </Router>
        {/* <Helmet>
            <script src="./icons/font-awesome.min.js" />
        </Helmet> */}
    </div>
  );
}

export default App;
