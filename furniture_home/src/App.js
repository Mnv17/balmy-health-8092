import './App.css';
import { HomePage } from './Components/Pages/HomePage.jsx';
import { Route, Routes } from 'react-router-dom';
import {FurniturePage} from "./SliderComponents/Cards";
import  {Cart}  from './Components/Cart';

function App() {
  
  return (
  <Routes>
   <Route path='/' element={<HomePage/>}> 
   </Route>
   <Route path='/ProductPage' element={<FurniturePage />}></Route>
   <Route path='/CartPage' element={<Cart/>}></Route>
    </Routes>
    
    
  );
}

export default App;