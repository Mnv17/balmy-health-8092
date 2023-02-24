import './App.css';
import { Navbar } from './Components/navbar';
import { MiddlePart } from "./Components/middle";
import { Footer } from './Components/footer';
import {Slider} from "./SliderComponents/slider.jsx";
import { ImagelSlider } from './SliderComponents/Image';
function App() {
  return (
  <>
    <Navbar/>
    <Slider/>
    <MiddlePart/>
    <ImagelSlider/>
    <Footer/>
    </>
     
    
  );
}

export default App;