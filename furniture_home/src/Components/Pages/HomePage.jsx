import { Navbar } from '../navbar';
import { MiddlePart } from "../middle";
import { Footer } from '../footer';
import { ImagelSlider } from '../../SliderComponents/Image';
import {BlogSlider} from "../../SliderComponents/Blog";
import { Slider } from '../../SliderComponents/slider.jsx';



export function HomePage() {
 
    return (
    <>
      <Navbar/>
      <Slider/>
      <ImagelSlider/>
      <MiddlePart/>
      <BlogSlider/>
      <Footer/>
      </>
       
      
    );
  }