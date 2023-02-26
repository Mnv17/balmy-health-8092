import "./middle.css";
import {BiBed, BiLocationPlus, BiSliderAlt} from "react-icons/bi"
import {MdCancelScheduleSend, MdOutlineMobileFriendly} from "react-icons/md";
import {BsTruckFlatbed} from "react-icons/bs"
export function MiddlePart(){
    return(
        <>
         <div className="Middle-one">
       <h2>Furniture Home Provide's ..</h2>
       <hr />
       </div>
    <div>
    <div className="middle-div">
        <div className="middle-box">
        <img className="middle-img" src="https://static.vecteezy.com/system/resources/thumbnails/000/350/131/small/4__2832_29.jpg" alt="" />
        <p>Packages</p>
    </div>
    <div className="middle-box">
    <img className="middle-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa6Zuvvdq1RhKJs6ydjWGJOA9hhe6XhZ_J0w&usqp=CAU" alt="" />
        <p>Furniture</p>
    </div>
    <div className="middle-box">
    <img className="middle-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIpUsV_D5haFSmQdSzBy4A-M8UwymBU-4XoA&usqp=CAU" alt="" />
        <p>Appliences</p>
    </div>
    <div className="middle-box">
    <img className="middle-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0XQA12AxFWYiwdNc1Yqt5oAxDJH0cpkSrQ&usqp=CAU" alt="" />
        <p>Electronics</p>
    </div>
    <div className="middle-box">
    <img className="middle-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6EXOW2mAxNMjRz_f1EQ66aLThoCCEuu7Zw&usqp=CAU" alt="" />
        <p>Fitness</p>
    </div>
    <div className="middle-box">
    <img className="middle-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStt6xSoxT_ykcyRXGNhHKpepGXskEhRYZDA&usqp=CAU" alt="" />
        <p>WFH Essentials</p>
    </div>
    </div>
    </div>
    <div className="Middle-one">
       <h2>There's more to Explore ..</h2>
       <hr />
       </div>
        <div className="Middle-two">
            <div className="middle-item">
               <BiBed className="icon"/>
                <h2>Finest-quality products</h2>
                <p>Quality matters to you, and us! That's why we do a strict quality-check for every product.</p>
            </div>
            <div className="middle-item">
                <BiLocationPlus className="icon"/>
                <h2>Free relocation</h2>
                <p>Changing your house or even your city? We'll relocate your rented products for free.</p>
            </div>
            <div className="middle-item">
                <BiSliderAlt className="icon"/>
                <h2>Free maintenance</h2>
                <p>Keeping your rented products in a spick and span condition is on us, so you can sit back and relax.</p>
            </div>
            <div className="middle-item">
                <MdCancelScheduleSend className="icon"/>
                <h2>Cancel anytime</h2>
                <p>Pay only for the time you use the product and close your subscription without any hassle.</p>
            </div>
            <div className="middle-item">
               <BsTruckFlatbed className="icon"/>
                <h2>Easy return on delivery</h2>
                <p>If you don't like the product on delivery, you can return it right away—no questions asked.</p>
            </div>
            <div className="middle-item">
                <MdOutlineMobileFriendly className="icon"/>
                <h2>Keep upgrading</h2>
                <p>Bored of the same product? Upgrade to try another, newer design and enjoy the change!</p>
            </div>
        
    </div>
    </>
    )
}