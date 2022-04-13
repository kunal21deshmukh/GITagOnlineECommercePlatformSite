import React from 'react'
import './AccountInfo.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackendService from '../../service/BackendService';
import {   useParams } from "react-router-dom";
import Navbar from '../Navbar';
const AccountInfo=()=> {
let sid=localStorage.getItem('userId');
  const [userName,setuserName]=useState("");
  const [userEmail,setuserEmail]=useState("");
  const [userPhoneno,setuserPhoneno]=useState("");
  const [usercity,setusercity]=useState("");
  const [userstate,setuserstate]=useState("");
  const [usercountry,setusercountry]=useState("");
  const [userzipCode,setuserzipCode]=useState("");
  const [userlocation,setuserlocation]=useState("");
 // const { id } = useParams();
  
//alert("hi subscrber");

const accnt={userName,userEmail,userPhoneno,usercity,userstate,usercountry,userzipCode,userlocation};

useEffect(() => {
  if (localStorage.getItem('userId')) { //2
    BackendService
      .getAccountSub(localStorage.getItem('userId')) //2
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

if (localStorage.getItem('userId'))
{
  return (
   
      <div>
          <Navbar/>
          <br/>
          <br/>
          
         
          <div className="container">
    <div className="row">
        <div className=" col-lg-5 col-md-7 mx-auto">
            <div className="panel border bg-white">
                <div className="panel-heading">
                    <center><h3 className="pt-3 font-weight-bold">Account Information</h3></center>
                </div>
                <div className="panel-body p-3"></div>


 <center>
<table cellPadding={10} cellSpacing={5} >
  
  <tbody>
    <tr>
      <th>Name:</th>
      <td>{userName}</td>
    </tr>
    <tr>
      <th>Email:</th>
      <td>{userEmail}</td>
    </tr>
    <tr>
      <th>Phone No:</th>
      <td>{userPhoneno}</td>
    </tr>
    <tr>
      <th>City:</th>
      <td>{usercity}</td>
    </tr>
    <tr>
      <th>State:</th>
      <td>{userstate}</td>
    </tr>
    <tr>
      <th>Country:</th>
      <td>{usercountry}</td>
    </tr>
    <tr>
      <th>Zipcode:</th>
      <td>{userzipCode}</td>
    </tr>
    <tr>
      <th>Address:</th>
      <td>{userlocation}</td>
    </tr>
   
  </tbody>
</table>
</center>

<br/>
<center>
<Link to={`/subscriberAccoInfo/edit/${sid}`}>
 
    <button type="button" class="btn btn-primary" >Update</button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/optionsToSubscriber">
    <button type="button" class="btn btn-primary">Back</button>
    </Link>
    </center>
</div></div></div></div>
</div>


  )
}
else
{
  return(
    <div>
      <h5>Please Login First</h5>
     <Link to="/">
    <button type="button" class="btn btn-primary">Back</button>
    </Link>
    </div>
  )
}
}

export default AccountInfo