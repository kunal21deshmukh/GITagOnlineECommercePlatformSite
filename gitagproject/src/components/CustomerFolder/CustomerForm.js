import React from 'react';
//import { Button} from 'react-bootstrap';
import './CustomerForm.css';
import { useState } from "react";
import {  useHistory, useParams } from "react-router-dom";
import BackendService from '../../service/BackendService'
//import { useEffect } from "react/cjs/react.development";

import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { SymmetryVertical } from 'react-bootstrap-icons';
const CustomerForm=()=> {
  const [custName, setcustName] = useState("");
  const [custEmail, setcustEmail] = useState("");
  const [custPassword, setcustPassword] = useState("");
  const [custPhoneno, setcustPhoneno] = useState("");
  const [city, setcustcity] = useState("");
  const [state, setcuststate] = useState("");
  const [country, setcustcountry] = useState(""); 
  const [zipCode, setcustzipCode] = useState("");
  const [location, setlocation] = useState("");
  const[err,setErr]=useState("");
  const history = useHistory();//The useHistory hook allows us to access React Router's history object.
  const { id } = useParams();


  const saveCustomer = (e) => {
    e.preventDefault();
 //preventDefault() method is used to prevent the browser from executing the default action 
        //of the selected element.
    const customer = { custName,custEmail,custPassword,custPhoneno,city,state,country,zipCode,location};
   if (document.getElementById("custName").value == 0) {
          // toast.warn("Name can't be blank!");
          document.getElementById("pppp").innerText = "* Name can't be blank!!!";
          return false;
      }
      
      if (!document.getElementById("custEmail").value.includes("@")) {  
        document.getElementById("emaillll").innerText = "* email should contains @";
        return false;
    }
   
    if(document.getElementById("custPassword").value == 0)
    {document.getElementById("pass").innerText = "* password should be provided ";
    return false;

    }
    if(document.getElementById("custPhoneno").value.length < 10)
    {
      document.getElementById("ph").innerText = "* phone no. should have 10 digits ";
    return false;

    }
    else{
      document.getElementById("ph").innerText ="";
      document.getElementById("pass").innerText ="";
      document.getElementById("emaillll").innerText ="";
      document.getElementById("pppp").innerText ="";
 
    }
  
    BackendService
    .create(customer)
    .then((response) => {
      console.log("customer added successfully", response.data);
      history.push("/LoginPage");
    })
    .catch((error) => {
      console.log("something went wroing", error.message);
      setErr(error.message);
      console.log(err);
      alert(error + "please provide all data!!!")
    });
  };



  return <div>
    <Navbar/>
   
       <br/>
       <br/>



        <div className="container">
        <div className='bckcust'>
    <div className="row">
        <div className=" col-lg-5 col-md-7 mx-auto">
            <div className="panel border bg-white">
                <div className="panel-heading">
                    <center><h3 className="pt-3 font-weight-bold">Register</h3></center>
                </div>
                <div className="panel-body p-3">



                <table>
          <tr><td>Name:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="custName"
          value={custName}
          onChange={(e) => setcustName(e.target.value)}
            placeholder="Enter name"/></td>
            </tr>
            <tr><td colSpan={2}><center><h6 id="pppp" style={{color:"red"}}></h6></center></td></tr>
            <tr><td>Email:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="custEmail"
          value={custEmail}
          onChange={(e) => setcustEmail(e.target.value)}
            placeholder="Enter email"/></td></tr>
             <tr><td colSpan={2}><center><h6 id="emaillll" style={{color:"red"}}></h6></center></td></tr>
            
            <tr><td>Password:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="custPassword"
          value={custPassword}
          onChange={(e) => setcustPassword(e.target.value)}
            placeholder="Enter password"/></td></tr>
            <tr><td colSpan={2}><center><h6 id="pass" style={{color:"red"}}></h6></center></td></tr>
            <tr><td>PhoneNo:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="custPhoneno"
          value={custPhoneno}
          onChange={(e) => setcustPhoneno(e.target.value)}
            placeholder="Enter phoneno"/></td></tr>
              <tr><td colSpan={2}><center><h6 id="ph" style={{color:"red"}}></h6></center></td></tr>
            <tr><td>City:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="city"
          value={city}
          onChange={(e) => setcustcity(e.target.value)}
            placeholder="Enter city"/></td></tr>
            <tr><td>State:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="state"
          value={state}
          onChange={(e) => setcuststate(e.target.value)}
            placeholder="Enter state"/></td></tr>
            <tr><td>Country:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="country"
          value={country}
          onChange={(e) => setcustcountry(e.target.value)}
            placeholder="Enter country"/></td></tr>
            <tr><td>Zipcode:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="zipCode"
          value={zipCode}
          onChange={(e) => setcustzipCode(e.target.value)}
            placeholder="Enter zipcode"/></td></tr>
            <tr><td>Address:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="location"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
            placeholder="Enter address"/></td></tr>
          </table>
         
         
          <div className="btn btn-primary btn-block mt-3" onClick={(e) => saveCustomer(e)} >Submit</div>
          <div className="text-center pt-4 text-muted"><a href="/subscriberRegistr">Registration link for Subscriber</a> </div>
       
          </div>




                </div>
                </div>
            </div>
        </div>
    </div>





  </div>;
}

export default CustomerForm;



{/* <h5>Registration Form</h5>
  
   <form>
       
        <div className="form-group">
          
         
          <table>
          <tr><td>Name:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="custName"
          value={custName}
          onChange={(e) => setcustName(e.target.value)}
            placeholder="Enter name"/></td></tr>
            <tr><td>Email:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="custEmail"
          value={custEmail}
          onChange={(e) => setcustEmail(e.target.value)}
            placeholder="Enter email"/></td></tr>
            <tr><td>Password:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="custPassword"
          value={custPassword}
          onChange={(e) => setcustPassword(e.target.value)}
            placeholder="Enter password"/></td></tr>
            <tr><td>PhoneNo:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="custPhoneno"
          value={custPhoneno}
          onChange={(e) => setcustPhoneno(e.target.value)}
            placeholder="Enter phoneno"/></td></tr>
            <tr><td>City:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="city"
          value={city}
          onChange={(e) => setcustcity(e.target.value)}
            placeholder="Enter city"/></td></tr>
            <tr><td>State:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="state"
          value={state}
          onChange={(e) => setcuststate(e.target.value)}
            placeholder="Enter state"/></td></tr>
            <tr><td>Country:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="country"
          value={country}
          onChange={(e) => setcustcountry(e.target.value)}
            placeholder="Enter country"/></td></tr>
            <tr><td>Zipcode:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="zipCode"
          value={zipCode}
          onChange={(e) => setcustzipCode(e.target.value)}
            placeholder="Enter zipcoe"/></td></tr>
            <tr><td>Address:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="location"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
            placeholder="Enter address"/></td></tr>
          </table>
          <div className="paddingTop">
          <button onClick={(e) => saveCustomer(e)} className="btn btn-primary">
            Submit
          </button>
      
       </div>
       <a href="/subscriberRegistr">Registration link for Subscriber</a>
          </div>
       
        </form> */}
   