import React from 'react';
import { Button} from 'react-bootstrap';
import './SubscriberForm.css';

import LoginPage from '../LoginPage';

import { useEffect, useState } from 'react';
import {  useHistory, useParams } from "react-router-dom";
import BackendService from '../../service/BackendService';
import Navbar from '../Navbar';

const SubscriberForm=()=> {
  let sid=localStorage.getItem('userId');
  const [subscrName, setsubscrName] = useState("");
  const [subscrEmail, setsubscrEmail] = useState("");
  const [subscrPassword, setsubscrPassword] = useState("");
  const [subscrPhoneno, setsubscrPhoneno] = useState("");
  const [city, setsubsrcity] = useState("");
  const [state, setsubsrstate] = useState("");
  const [country, setsubsrcountry] = useState(""); 
  const [zipCode, setsubsrzipCode] = useState("");
  const [location, setlocation] = useState("");
  const [status,setStatus]=useState("valid");
  const [subscrDate,setSubscrDate]=useState("");
  const [rule ,setRule]= useState("");
  const history = useHistory();//The useHistory hook allows us to access React Router's history object.
 // const { sid } = useParams();
  const [ruleIds, setruleIds] = useState([]);

  const init = () => {
    BackendService.getAll() 
      .then(response => {
        console.log('getting all rules', response.data);
        setruleIds(response.data); 
      })                            
      .catch(error => {
        console.log('Something went wrong', error);
        alert(error + "please provide all data!!!")
      }) 
  }

 

  useEffect(() => {
    init();
  }, []);

  const saveSubscriber = (e) => {
    e.preventDefault();
    //preventDefault() method is used to prevent the browser from executing the default action 
        //of the selected element.
    const subscriber = { rule,subscrName,subscrEmail,subscrPassword,subscrPhoneno,city,state,country,zipCode,location,status,subscrDate};
    console.log("rule id of selected radio"+" "+rule);
    //console.log("subscriber object "+" "+subscriber.rule.id);
  
    if (document.getElementById("subscrName").value == 0) {
      // toast.warn("Name can't be blank!");
      document.getElementById("pppp").innerText = "* Name can't be blank!!!";
      return false;
  }
  
  if (!document.getElementById("subscrEmail").value.includes("@")) {  
    document.getElementById("emaillll").innerText = "* email should contains @";
    return false;
}

if(document.getElementById("subscrPassword").value == 0)
{document.getElementById("pass").innerText = "* password should be provided ";
return false;

}
if(document.getElementById("subscrPhoneno").value.length < 10)
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
    .createSub(subscriber)
   
    .then((response) => {
      console.log("subscriber added successfully", response.data.rule);
      history.push("/LoginPage");
    })
    .catch((error) => {
      console.log("something went wrong", error);
    });



};



  return <div >
      <Navbar/>
   <div className="paddingTopper">
   <div className="addTocenterSubscr">
       
   <h5>Registration Form</h5>
   
         

 
   <form className="panel border bg-white">
        <div className="form-group">
        <table>
          <tr><td>Name:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="subscrName"
          value={subscrName}
          onChange={(e) => setsubscrName(e.target.value)}
            placeholder="Enter name"/></td></tr>
              <tr><td colSpan={2}><center><h6 id="pppp" style={{color:"red"}}></h6></center></td></tr>
            <tr><td>Email:</td><td className="textBox">
          {/* <input type="text" className="form-control col-12" readOnly={true} id="subscrEmail" */}
          <input type="text" className="form-control col-12" id="subscrEmail"
          value={subscrEmail}
          onChange={(e) => setsubscrEmail(e.target.value)}
            placeholder="Enter email"/></td></tr>
              <tr><td colSpan={2}><center><h6 id="emaillll" style={{color:"red"}}></h6></center></td></tr>
            <tr><td>Password:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="subscrPassword"
          value={subscrPassword}
          onChange={(e) => setsubscrPassword(e.target.value)}
            placeholder="Enter password"/></td></tr>
              <tr><td colSpan={2}><center><h6 id="pass" style={{color:"red"}}></h6></center></td></tr>
            <tr><td>PhoneNo:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="subscrPhoneno"
          value={subscrPhoneno}
          onChange={(e) => setsubscrPhoneno(e.target.value)}
            placeholder="Enter phoneno"/></td></tr>
              <tr><td colSpan={2}><center><h6 id="ph" style={{color:"red"}}></h6></center></td></tr>
            <tr><td>City:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="city"
          value={city}
          onChange={(e) => setsubsrcity(e.target.value)}
            placeholder="Enter city"/></td></tr>
            <tr><td>State:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="state"
          value={state}
          onChange={(e) => setsubsrstate(e.target.value)}
            placeholder="Enter state"/></td></tr>
            <tr><td>Country:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="country"
          value={country}
          onChange={(e) => setsubsrcountry(e.target.value)}
            placeholder="Enter country"/></td></tr>
            <tr><td>Zipcode:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="zipCode"
          value={zipCode}
          onChange={(e) => setsubsrzipCode(e.target.value)}
            placeholder="Enter zipcoe"/></td></tr>
            <tr><td>Address:</td><td className="textBox">
          <input type="text" className="form-control col-12" id="location"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
            placeholder="Enter address"/></td></tr>
          </table>
          <div className="paddingTop">
             <h5>Select One Plan</h5>
          </div>
          <div>




          <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>No.</th>
              <th>Description</th>
              
              <th>Duration</th>
              <th>Charges</th>
              <th>Choose</th>
            </tr>
          </thead>
          <tbody>
            {
              ruleIds.map(rule=>(
                <tr key={rule.id}>
                
                <td>{rule.id}</td>
                <td>{rule.description}</td>
                <td>{rule.duration}</td>
                <td>{rule.charges}</td>

                <td><div class="radio">
                <label><input type="radio" id="rule" name="ruless" 
                value={rule.id}
                onClick={(e) => setRule(rule)}/></label>
                
                </div></td>
              </tr>

              ))
            }
          </tbody>
        </table>
        </div>
        <div>
          <h6>Normal Plan : Your products will shown to customer when customer search for it</h6>
          <h6>Silver Plan : Your most saleable products will be visible to customer on home page</h6>
          <h6>Golden Plan : Your all products will be visible to customer on home page</h6>
        </div>
          <div className="paddingTop">
          <button onClick={(e) => saveSubscriber(e)} className="btn btn-primary">
            Submit
          </button>
       </div>
       
          </div>
       
</form>
   </div>
   </div>
  </div>;
}

export default SubscriberForm;
