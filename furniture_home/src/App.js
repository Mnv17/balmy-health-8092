import './App.css';
import { Navbar } from './Components/navbar';
import { MiddlePart } from "./Components/middle";
import { Footer } from './Components/footer';
import {Slider} from "./SliderComponents/slider.jsx";
import { ImagelSlider } from './SliderComponents/Image';
import {FurniturePage} from "./SliderComponents/Cards";
function App() {
  return (
  <>
    <Navbar/>
    <Slider/>
    <ImagelSlider/>
    <MiddlePart/>
    <Footer/>
    </>
     
    
  );
}

export default App;