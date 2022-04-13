import React from 'react'
import {Cart4} from 'react-bootstrap-icons';
import {  useHistory, useParams } from "react-router-dom";
function Cart() {
    const history = useHistory();//The useHistory hook allows us to access React Router's history object.
    const RouteToCart=()=>{
         history.push("/CustomerCart")
    }
  return (
   
    <div><Cart4 className="bi bi-cart bi-10x"  onClick={RouteToCart}/>
   </div>
    
  )
}

export default Cart