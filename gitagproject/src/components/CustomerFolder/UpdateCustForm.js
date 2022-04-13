import React from 'react';
import { Button} from 'react-bootstrap';
import './UpdateCustForm.css';

import LoginPage from '../LoginPage';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {  useHistory, useParams } from "react-router-dom";
import BackendService from '../../service/BackendService';
import Navbar from '../Navbar';

const UpdateCustForm=()=> {
   let sid=localStorage.getItem('userId');
  const [userName,setuserName]=useState("");
  const [userEmail,setuserEmail]=useState("");
  const [userPhoneno,setuserPhoneno]=useState("");
  const [usercity,setusercity]=useState("");
  const [userstate,setuserstate]=useState("");
  const [usercountry,setusercountry]=useState("");
  const [userzipCode,setuserzipCode]=useState("");
  const [userlocation,setuserlocation]=useState("");
  const history = useHistory();//The useHistory hook allows us to access React Router's history object.
  const accnt={userName,userEmail,userPhoneno,usercity,userstate,usercountry,userzipCode,userlocation};
  useEffect(() => {
    if (localStorage.getItem('userId')) { //2
      BackendService
        .getAccountCust(localStorage.getItem('userId')) //2
        .then((accnt) => {
          setuserName(accnt.data.userName);
          setuserEmail(accnt.data.userEmail);
          setuserPhoneno(accnt.data.userPhoneno);
          setusercity(accnt.data.usercity);
          setuserstate(accnt.data.userstate);
          setusercountry(accnt.data.usercountry);
          setuserzipCode(accnt.data.userzipCode);
          setuserlocation(accnt.data.userlocation);
          
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
  }, []);
  
  const UpdateCustomer = (e) => {
    e.preventDefault();
 //preventDefault() method is used to prevent the browser from executing the default action 
        //of the selected element.
  //  const customer = { custName,custEmail,custPassword,custPhoneno,city,state,country,zipCode,sid,location};

    if(sid)
    {
    console.log("in if block to update");
    BackendService
    .updateCustInfo(accnt)
    .then((response) => {
      console.log("customer details updated successfully", response.data);
      history.goBack();
    })
    .catch((error) => {
      console.log("something went wrong", error);
    });
  };
}
  return <div>
    <Navbar/>
  <br/>
  <br/>
    <div className="container">
    <div className="row">
        <div className=" col-lg-5 col-md-7 mx-auto">
            <div className="panel border bg-white">
                <div className="panel-heading">
                    <center><h3 className="pt-3 font-weight-bold">Update Form</h3></center>
                </div>
                <div className="panel-body p-3">
 
 
  
   <form>
     <div className="form-group">
     <table>
     <tr><td>Name:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="userName"
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
            placeholder="Enter name"/></td></tr>

      <tr><td>Email:</td><td className="textBox">
          {/* <input type="text" className="form-control col-12" readOnly={true} id="subscrEmail" */}
          <input type="text" className="form-control col-12" id="userEmail"
          value={userEmail}
          onChange={(e) => setuserEmail(e.target.value)}
            readOnly placeholder="Enter email"/></td></tr>
         
         <tr><td>PhoneNo:</td><td className="textBox">
       <input type="text" className="form-control col-12" id="userPhoneno"
       value={userPhoneno}
       onChange={(e) => setuserPhoneno(e.target.value)}
         placeholder="Enter phoneno"/></td></tr>
         <tr><td>City:</td><td className="textBox">
       <input type="text" className="form-control col-12" id="usercity"
       value={usercity}
       onChange={(e) => setusercity(e.target.value)}
         placeholder="Enter city"/></td></tr>
         <tr><td>State:</td><td className="textBox">
       <input type="text" className="form-control col-12" id="userstate"
       value={userstate}
       onChange={(e) => setuserstate(e.target.value)}
         placeholder="Enter state"/></td></tr>
         <tr><td>Country:</td><td className="textBox">
       <input type="text" className="form-control col-12" id="usercountry"
       value={usercountry}
       onChange={(e) => setusercountry(e.target.value)}
         placeholder="Enter country"/></td></tr>
         <tr><td>Zipcode:</td><td className="textBox">
       <input type="text" className="form-control col-12" id="userzipCode"
       value={userzipCode}
       onChange={(e) => setuserzipCode(e.target.value)}
         placeholder="Enter zipcoe"/></td></tr>
         <tr><td>Address:</td><td className="textBox">
       <input type="text" className="form-control col-12" id="userlocation"
       value={userlocation}
       onChange={(e) => setuserlocation(e.target.value)}
         placeholder="Enter address"/></td></tr>
       </table>
       
       <div className="paddingTop">
         <center>
       <button onClick={(e) => UpdateCustomer(e)} className="btn btn-primary">
         Submit
       </button>
       </center>
    </div>
    
       </div>
    
</form>
</div>




</div>

</div>
</div>
</div>


   
  </div>;
}


export default UpdateCustForm;
