import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import './App.css';
import Achievments from './Components/Achievments/Achievments';
import Intro from './Components/Inro/Intro';
import Schedules from './Components/Schedules/Schedules';
import Registration from './Components/Registration/Registration';
import SegmentsSlider from './Components/SegmentsSlider/SegmentsSlider';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Hero></Hero>
        <Achievments></Achievments>
        <Intro></Intro>
        <SegmentsSlider></SegmentsSlider>
        <Schedules></Schedules>
        <Registration></Registration>
    </div>
  );
}

export default App;
