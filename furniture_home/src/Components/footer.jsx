import "./footer.css"
import img2 from "./images/Screenshot (758).png"
import { Link } from "react-router-dom"
import { IoIosCall, IoIosMail } from "react-icons/io";
import { GrFacebookOption, GrTwitter, GrPinterest, GrYoutube, GrInstagram, GrLinkedin } from "react-icons/gr";
export function Footer(){
    return (
        <>
    <div className="footer">
        <div > 
            <h2>Furniture Home</h2>
        <p>About Us</p> 
        <p>Culture</p>
        <p>Investors</p>
        <p>Carrer</p>
        <p>Contact</p>
        <p>Our Benifit</p>
        <p>SiteMap</p>
        </div>
        <div>
        <h2>Information</h2>
        <p>Blog</p>
        <p>FAQs</p>
        <p>Documents Required</p>
        </div>
        <div>
        <h2>Policies</h2>
        <p>Shipping Policy</p>
        <p>Cancellation & Return</p>
        <p>Privacy Policy</p>
        <p>Rental Terms & Conditions</p>
        <p>Referral Terms & Conditions</p>
        </div>
        <div className="help">
            <h2>Need Help ?</h2>
            <button className="footer-button">Chat With Us (9AM - 6PM)</button>
            <img className="footer-img" src={img2} alt="" />
        </div>
    </div>
    <div className="footer-two">
        <p className="footer-tag">© 2023. Edunetwork Pvt. Ltd.</p>
    <div className="footersecond">
                    <div class="footer-icons">
                        <Link to="" className="Call-icon"><IoIosCall /></Link>
                        <Link to="" className="mail-icon"><IoIosMail /></Link>
                        <Link to="" className="facebook-icon"><GrFacebookOption /></Link>
                        <Link to="" className="twitter-icon"><GrTwitter /></Link>
                        <Link to="" className="pinterest-icon"><GrPinterest /></Link>
                        <Link to="" className="youtube-icon"><GrYoutube /></Link>
                        <Link to="" className="instagram-icon"><GrInstagram /></Link>
                        <Link to="" className="linkedin-icon"><GrLinkedin /></Link>
                </div>
            </div>
    </div>
    </>
    )
}