import { tab } from '@testing-library/user-event/dist/tab';
import React from 'react';
import {Search} from 'react-bootstrap-icons';


import Customer from '../CustomerFolder/Customer';
import Login from '../Login';

import {  useHistory, useParams } from "react-router-dom";
import OrderSub from '../AccountSub';


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
                  <OrderSub/>
               </span>
              
            </div>

        </div>
        </div>
  
        </div>   
         
        
         
    )
}

export default Navbar;



