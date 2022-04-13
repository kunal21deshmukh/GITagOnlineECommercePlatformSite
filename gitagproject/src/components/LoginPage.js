import React, { useState } from 'react';
import { Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BackendService from '../service/BackendService';
import {  useHistory } from "react-router-dom";

import './LoginPage.css';
import Navbar from './Navbar';

const LoginPage=()=> {

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const history = useHistory();
    let message="";
const loginSubmit=(e)=>{
    e.preventDefault();
    const data={email,password};

    if (document.getElementById("email").value == 0) {
        // toast.warn("Name can't be blank!");
        document.getElementById("p").innerText = "enter email please";
        return false;
    }
    
    if (document.getElementById("pass").value==0) {  
      document.getElementById("q").innerText = "enter password please";
      return false;
  }

else{
   
    document.getElementById("p").innerText ="";
    document.getElementById("q").innerText ="";
    
   
}


    BackendService.
    loginCred(data)
    .then((response)=>{

        console.log(response.data);
        // console.log(response.data.roles[0].id);
        // console.log(response.data.roles[0].role);
        console.log(response.data.useId);
          if(response.data.roles[0].role==="CUSTOMER" && response.data.useId!=0)
            {
                
                console.log("in customer block");
                localStorage.setItem('userId', JSON.stringify(response.data.useId));
               // console.log("localstorage id "+userId);
                history.push("/");
            }
            else if(response.data.roles[0].role==="SUBSCRIBER" && response.data.useId!=0)
            {
                console.log("in subscriber block");
                localStorage.setItem('userId', JSON.stringify(response.data.useId));
               // console.log("localstorage id "+userId);
                history.push("/optionsToSubscriber");
            }
            else if(response.data.roles[0].role==="SUBSCRIBER" && response.data.useId===0)
            {
                console.log("in subscriber block");
                alert(response.data.msg);
            }

            else if(response.data.roles[0].role==="ADMIN" && response.data.useId!=0)
            {
                console.log("in admin block");
                localStorage.setItem('userId', JSON.stringify(response.data.useId));
              //  console.log("localstorage id "+userId);
                history.push("/admindash");
            }
       
        else
        {
           message="authentication failed";
        }

    })
    .catch((error)=>{
        alert("please give correct credentials")
        console.log("something went wrong", error);

    });
};



  return <div >
        <Navbar/>
       
      <div className="addtopDiv">

      </div>
  
      {/* <form>
      <div classNameName="col-sm-6 offset-sm-3">
     <input type="text" placeholder='enter email'
     classNameName="form-control"
     value={email}
     onChange={(e) => setEmail(e.target.value)}/>
     <br/>
     <input type="password" placeholder='enter password'
     classNameName="form-control"
     value={password}
     onChange={(e) => setPassword(e.target.value)}/>
     <br/>

     <div classNameName="row">
<div classNameName="col-sm-12 col-md-9">
<button onClick={(e) => loginSubmit(e)} classNameName="btn btn-primary">
            Login
          </button>
</div>
  <div classNameName="col-sm-12 col-md-3">
  <a href="/forgotPassword" >forgot passwoord????</a>
  </div>
  </div>
       </div>
       </form> */}
      


      
       <div className="container l-form">
       <div className='loginBack'>
    <div className="row">
   
        <div className=" col-lg-5 col-md-7 mx-auto">
       
            <div className="panel border bg-white">
                <div className="panel-heading">
                    <h3 className="pt-3 font-weight-bold">Login</h3>
                </div>
                <div className="panel-body p-3">
                    <form >
                        <div className="form-group py-2">
                            <div className="input-field"> 
                            <span className="far fa-user p-2"></span> 
                           <input type="text" placeholder='enter email'
                            className="form-control"
                            value={email}
                            id="email"
                            onChange={(e) => setEmail(e.target.value)} required/> </div>
                        </div>
                        <div ><center><h6 id="p" style={{color:"red"}}></h6></center></div>
                        <div className="form-group py-1 pb-2">
                            <div className="input-field"> 
                            <span className="fas fa-lock px-2"></span>
                            <input type="password" placeholder='enter password'
                              className="form-control"
                                value={password}
                                id="pass"
                            onChange={(e) => setPassword(e.target.value)} required />
                             <button className="btn bg-white text-muted"> <span className="far fa-eye-slash"></span> </button> </div>
                        </div>
                        <div ><center><h6 id="q" style={{color:"red"}}></h6></center></div>
                        <div className="form-inline"> <input type="checkbox" name="remember" id="remember"/>
                         <label for="remember" className="text-muted">Remember me</label> 
                         <a href="/forgotPassword" id="forgot" className="font-weight-bold">Forgot password?</a> </div>
                         
                        <div className="btn btn-primary btn-block mt-3" onClick={(e) => loginSubmit(e)}>Login</div>
                        <div className="text-center pt-4 text-muted">Don't have an account? <a href="/custForm">Sign up</a> </div>
                    </form>
                </div>
              
            </div>
        </div>
    </div>
</div>
</div>
  </div>;
}

export default LoginPage;
  