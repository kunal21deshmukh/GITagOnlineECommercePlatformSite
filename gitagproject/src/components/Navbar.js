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
import {  useHistory, useParams } from "react-router-dom";


function Navbar() {
   const history = useHistory();
   const showHomePage=()=>{
      history.push('/');
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
            <input className="header_searchInput" type="text"/>
            <Search className='header_searchIcon'/>
        
        </div>
        <div className="header_nav">
            <div className="header_option" /* className="statelist" */>
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
  
        </div>   
         
        
         
    )
}

export default Navbar;



