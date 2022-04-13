import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import {Search} from 'react-bootstrap-icons';
import './Header.css';
import Category from './Category';
import Statewise from './Statewise';
import Order from './Order';
import Customer from './CustomerFolder/Customer';
import Login from './Login';
import Cart from './Cart';
import HomePageProducts from './HomePageProducts';
import AboutUs from './AboutUs';
import Slider from './slider/Slider';
import { useEffect, useState } from 'react';
import {  useHistory, useParams } from "react-router-dom";
import Footer from './Footer';
function Header() {
   const history = useHistory();//The useHistory hook allows us to access React Router's history object.
   const [Input,setInput]=useState("");
   const [PassInput,setPassInput]=useState("");
   const showHomePage=()=>{
  history.push('/');
  }
  const searchInText=()=>{
   history.push({
      pathname: '/searchBarPage',
      state: Input,
      
    });
  }
   return (
     
      <div>
    
      
        <div className='header'>
          
        <img 
        className="header_logo"
        src="https://lotusarise.com/wp-content/uploads/2021/11/geographical-indications-of-india-logo.jpg "
        onClick={()=>showHomePage()} />
         <div className="header_nav">
        <div className="header_option">
               <span
               className="header_optionLineOne">
                 <Category/>
               </span>
              
        </div>
        </div>
        <div className="header_search">
            <input className="header_searchInput" value={Input} type="text" onChange={(e) => setInput(e.target.value)}/>
          
            <Search value={Input} className='header_searchIcon' onClick={(e)=>searchInText(e)}/>
        
        </div>
        <div className="header_nav">
            <div className="header_option" >
               <span
               className="header_optionLineOne">
              
               </span>
               
            </div>
            <div className="header_option">
               <span
               className="header_optionLineOne">
                 <Customer/>
               </span>
               
            </div>
            <div className="header_option">
            <span
               className="header_optionLineOne">
                <Login/>
               </span>
              
            </div>
            <div className="header_option">
            <span
               className="header_optionLineOne">
                  <Order/>
               </span>
              
            </div>
            <div className="header_optionBasket">
                <Cart/>
                
            </div>

        </div>
        </div>
        <Slider/>
        <AboutUs/>
        <HomePageProducts/>
        <Footer/>
        </div>   
         
        
         
    )
}

export default Header;



//ClassName="stateList"