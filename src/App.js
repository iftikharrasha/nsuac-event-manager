import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
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

<Router>
      <Switch>
          <Route path="/home">
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
              <ScrollToTop smooth/>
          </Route>
          <Route path="/campus-star">
            
          </Route>
          <Route exact path="/">
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
              <ScrollToTop smooth/>
          </Route>
          <Route path="*">
              
          </Route>
      </Switch>
</Router>
        {/* <Helmet>
            <script src="./icons/font-awesome.min.js" />
        </Helmet> */}
    </div>
  );
}

export default App;
