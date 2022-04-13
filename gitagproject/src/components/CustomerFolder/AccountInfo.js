import React from 'react'
import './AccountInfo.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BackendService from '../../service/BackendService';
import {   useParams } from "react-router-dom";
import {  useHistory } from "react-router-dom";
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
  const history = useHistory();
 // const { id } = useParams();
  
//alert("hi subscrber");

const accnt={userName,userEmail,userPhoneno,usercity,userstate,usercountry,userzipCode,userlocation};

useEffect(() => {
  if (localStorage.getItem('userId')) {
    BackendService
      .getAccountCust(localStorage.getItem('userId'))
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


<table class="table table-borderless">
  
  <tbody>
    <tr>
      <th scope="row">Name:</th>
      <td>{userName}</td>
    </tr>
    <tr>
      <th scope="row">Email:</th>
      <td>{userEmail}</td>
    </tr>
    <tr>
      <th scope="row">Phone No:</th>
      <td>{userPhoneno}</td>
    </tr>
    <tr>
      <th scope="row">City:</th>
      <td>{usercity}</td>
    </tr>
    <tr>
      <th scope="row">State:</th>
      <td>{userstate}</td>
    </tr>
    <tr>
      <th scope="row">Country:</th>
      <td>{usercountry}</td>
    </tr>
    <tr>
      <th scope="row">Zipcode:</th>
      <td>{userzipCode}</td>
    </tr>
    <tr>
      <th scope="row">Address:</th>
      <td>{userlocation}</td>
    </tr>
   
  </tbody>
</table>


<center>
<Link to={`/customerAccoInfo/edit/${sid}`}>
    <button type="button" class="btn btn-primary">Update</button>
    </Link>
    &nbsp;&nbsp;&nbsp;&nbsp;
    <Link to="/">
    <button type="button" class="btn btn-primary">Back</button>
    </Link>
    </center>


</div> </div> </div> </div> 



</div>  


  )
}
else
{
  return(
    <div>
      <center>
      <h5>Please Login First</h5>
     <Link to="/LoginPage">
    <button type="button" class="btn btn-primary">Login</button>
    </Link>
    </center>
    </div>
  )
}
}

export default AccountInfo