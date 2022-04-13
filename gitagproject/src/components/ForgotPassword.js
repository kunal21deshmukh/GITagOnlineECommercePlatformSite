import React, { useState } from 'react';

import BackendService from '../service/BackendService';
import { Link, useHistory } from "react-router-dom";

const ForgotPassword=()=> {

    const[email,setEmail]=useState("");
    //const[password,setPassword]=useState("");
    const history = useHistory();

    const forgotPass=(e)=>
    {
        console.log("in forgotpass block");
        console.log(email);
        e.preventDefault();
        const data1={email};
    
        BackendService.
        retrivePass(data1).
        then((response)=>{
            console.log(response.data);
            alert("Your password is sent to your mail id please cheack!!!");
           // history.push("/LoginPage");
        })
        .catch((error)=>{
            console.log("something went wrong", error);
        });
    
    };


  return (
    <div>
        <div className="addtopDiv">

        </div>
    <form>
       <div className="col-sm-6 offset-sm-3">
       <input type="text" placeholder='enter email'
       className="form-control"
       value={email}
       onChange={(e) => setEmail(e.target.value)}/>
      <br/>
      <button onClick={(e) => forgotPass(e)} className="btn btn-primary">
       Retrive password
      </button>
     &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
     &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;    &nbsp;  &nbsp;
      <Link to="/LoginPage">
        
      <button className="btn btn-primary">
      Back
      </button>
      
      </Link>
      </div>
    </form>
  </div>
    
  )
}

export default ForgotPassword;