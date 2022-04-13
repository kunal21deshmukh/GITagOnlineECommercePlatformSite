import React from 'react'
import { useState } from "react";
import { useLocation,useHistory } from 'react-router-dom';
import {StarFill} from 'react-bootstrap-icons';
import Navbar from '../Navbar';
import BackendService from '../../service/BackendService';
function StarRating({
    count,value,inactiveColor='#ddd',
    size=24,
    activeColor='#f00',onChange
}) 
{
    const stars=Array.from({length:count},()=>'*')
    const handleChange=(value)=>{
        onChange(value+1);
    }

{
    return (
        <div>
        {
            stars.map((s,index)=>{
                let style=inactiveColor;
                if(index<value){
                    style=activeColor;
                }
                return(
                    <span className={"star"}
                    key={index}
                    style={{color:style,width:size,height:size,fontSize:size}}
                    onClick={()=>handleChange(index)}>{<StarFill/>}</span>
                )
            })
        }    
        {value}
        </div>
    )
}
}



function FeedbackRating() {
    const history=useHistory();
    const location = useLocation();
    const [rating,setRating]=useState(3);
    let custId=localStorage.getItem('userId');
    const handleChange=(value)=>{
        setRating(value);
      //  alert(value);
    }
    const subscrId=location.state.subscrId;
    const prodName=location.state.prdnm;
    const data1={custId,subscrId,prodName,rating};

    const feedBack=()=>{
        alert(data1.prodName);
        alert(data1.custId);
        BackendService.storeFeedback(data1)
        .then((response) => {
            console.log( response.data);
           history.push('/');
          })
          .catch((error) => {
            console.log("something went wrong", error);
          });
        }
    
  return (
    <div>
        <Navbar/>
        <br/>
        <br/>
        <center>
       <h4>Feedback Rating</h4> 
        <StarRating
        count={5}
        size={40}
        value={rating}
        activeColor={'yellow'}
        inactiveColor={'#ddd'}
        onChange={handleChange}/>
        <br/>

         <button className="btn btn-danger" onClick={()=>feedBack()}  >
                 Submit
                 </button>
                 </center>
        </div>
  )
}
export default FeedbackRating;