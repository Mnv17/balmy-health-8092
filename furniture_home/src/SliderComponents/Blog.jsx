import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Image.css";
import "./Blog.css";

export function BlogSlider(){
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
  <h2>Over 1.5 lac happy subscribers ..</h2>
  <hr />
  </div>
  <Carousel responsive={responsive} className="SliderSix">
            <div style={{marginLeft:"20px"}}>
                <div className="Slider-div">
                    <h3>Kushal Tiwari</h3>
                    <p style={{fontSize:"15px",fontWeight:"400"}}>Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods could be a big challenge. Furniture Home not just took away all our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs, I could smartly own a lot of stuff which would have come much later on my list. Heartfelt thanks to the whole Furniture Home team for making our renting experience completely hassle-free. It has been two great years and I am sure there are many more to come.</p>
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <div className="Slider-div">
                <h3>Navin Kumar</h3>
                <p style={{fontSize:"15px",fontWeight:"400"}}>When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Furniture Home. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work:D</p>

                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <div className="Slider-div">
                <h3>Anjali Sharma</h3>
                <p style={{fontSize:"15px",fontWeight:"400"}}>I got to know about Furniture Home through a friend and looked up for AC on their website and finally rented one. The delivery guys installed the AC in 2 days. And with a such a low deposit and rent, I didn't have to spend a whole lot for my comfort. Thank you Furniture Home, for being so easy breezy on my pocket.</p>
                
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <div className="Slider-div">
                <h3>Shreyas Ravetkar</h3>
                <p style={{fontSize:"15px",fontWeight:"400"}}>Furniture Home was unbelievably helpful. Never thought that setting up a new place would be just few clicks away. The customer support staff was on their toes to help me. Anytime 1 need something for my house, Furniture Home has it.</p>
                    
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>  
                <div className="Slider-div">
                <h3>Nikita Sharma</h3>
                <p style={{fontSize:"15px",fontWeight:"400"}}>The thought of renting the furniture had never occurred to me. When I saw Furniture Home's affordable range, I was super excited to try and it was really amazing. From service to product quality, everything was superb. I don't have to carry the same furniture to every house I move to and can change the look of my home whenever I want</p>
               
                </div>
            </div>
            <div style={{marginLeft:"20px"}}>
                <div className="Slider-div">
                <h3>Manish Srivastava</h3>
                <p style={{fontSize:"15px",fontWeight:"400"}}>I was suddenly asked to move to Chennai from Bengaluru in couple of days. Everything was garbled for me and huge tension of getting apartment, buying furnitures, selling while going back to Bangalore. Thanks to Furniture Home for excellent budgeted plans. With few mouse clicks and nominal security deposit u are done. No tension for delivery. Furniture Home is a furniture wish wizard. Also takes care of relocation made my life easy. Happy to be a customer for Furniture Home. It made my house a happy home!</p>
                    
            </div>
            </div>
        </Carousel>
        </>

)
}