import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Image.css"
import {FurniturePage} from "./Cards";

export function ImagelSlider(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
return (
  <>
  <div className="Image-one">
  <h2>You'll love to take these Home ..</h2>
  <hr />
  </div>
  <Carousel responsive={responsive} className="SliderFour">
    
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/43omh05r-500x500.jpg" alt="SliderImage" />
                <div >
                    <p style={{fontSize:"12px",fontWeight:"400"}}>Stanhope Engineered Wood King Si...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>King Bed Size, Charcole Grey</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹66,299</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹47,735</p> 
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/g0ealw05-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Stanhope Engineered Wood Study Table...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Cherry Malemine FInish</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹15,899</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹9,539</p> 
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/cy60eszd-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Morris Office Chair...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Black</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹1,091991</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹70,979</p> 
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/9ftx79fq-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Thrope Engineered Wood Queen Si...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Queen Bed Size</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹46,399</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹27,839</p> 
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/ralljccs-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Larson Solid Wood Table...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Cherry Malemine FInish</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹15,899</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹12,539</p> 
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/1eoam6o5-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Turmain Solid Wood Study Table...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Cherry Malemine FInish</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹15,899</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹9,539</p> 
            </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/jey03mpj-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Thrope Engineered Wood Queen Si...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Queen Bed Size</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹46,399</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹27,839</p> 
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/0ipckdo0-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Carven Fabric Lounge Chair...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Strong Wood Table</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹66,299</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹47,735</p>  
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/8i37omyn-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Arabic Dining Table...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Table</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹40,299</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹23,735</p>  
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/bytomn61-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Angelou Study Desk Walnut...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>Studu Desk</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹20,399</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹13,839</p> 
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/eq9l6cb2-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Emmada Solid Wood Chest Of 6...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>TeakWood Finish</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹35,399</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹29,000</p> 
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <img className="Images" src="https://p.rmjo.in/productSquare/sx4yiugt-500x500.jpg" alt="SliderImage" />
                <div>
                <p style={{fontSize:"12px",fontWeight:"400"}}>Alberto Sloid BookShleves ...</p>
                    <p style={{fontSize:"10px",fontWeight:"400",color:"grey"}}>TeakWood Finish</p>
                    <p style={{fontSize:"12px",fontWeight:"400",color:"grey",textDecoration:"line-through"}}>₹39,399</p> 
                    <p style={{fontSize:"12px",fontWeight:"400"}}>₹22,000</p> 
                </div>
            </div>
            
            

        </Carousel>
        <button className="btn" onClick={{FurniturePage}}>Explore More ▶</button>
        </>

)
}