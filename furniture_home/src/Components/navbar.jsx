import { Link } from "react-router-dom";
import img1 from "./images/Screenshot (756).png";
import "./navbar.css";
import {AiOutlineShoppingCart} from "react-icons/ai"
import {FaRegHeart} from "react-icons/fa";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export function Navbar (){
    const { loginWithRedirect , isAuthenticated, logout } = useAuth0();
    return(
        <>
       <div className="navbar" >
        <div className="logo">
        <img  src={img1} alt="" />
          <h5>Furniture Home</h5>
        </div>
       
       <select placeholder='Select option' className="select-option">
        <option value="defaultoption">Select your City</option>
                <option value='option1'>Delhi</option>
                <option value='option2'>Bengalore</option>
                <option value='option3'>Chennai</option>
                <option value='option4'>Hyderabad</option>
       </select>
       <div className="search">
                    <input type="text" className="search__input" placeholder="Search here"/>
                        <button className="search__button">
                            <svg className="search__icon" aria-hidden="true" viewBox="0 0 24 24">
                                <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                </g>
                            </svg>
                        </button>                    
                </div>
                <div className="icon">
                <Link to="">
                    <AiOutlineShoppingCart /> 
                </Link>
                <Link to="">
                    <FaRegHeart/>
                    </Link>                
                </div>
             
                {isAuthenticated ?(
                   <button className="login-button" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                   Log Out
                 </button>
                ):(
                    <button className="login-button" onClick={() => loginWithRedirect()}>LOGIN/SIGNUP</button>
                )}
               
                
                
       </div>
       </>
    )
}