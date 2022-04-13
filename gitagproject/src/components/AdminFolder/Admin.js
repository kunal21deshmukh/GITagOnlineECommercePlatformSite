import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import BackendService from '../../service/BackendService'
import { Card, Row, Col, Container } from "react-bootstrap";
function Admin() {

    const [data,setData]=useState([]);


    const init = () => {
  
    BackendService.getAllSubsciber()
     .then(response=>{
      console.log(response.data);
      setData(response.data);
      
     })
     .catch((error) => {
        console.log("Something went wrong", error);
      });
  
}

useEffect(() => {
    init();
  }, []);

   
const MessageSubscr=(id)=>{
  alert("Message sent to subscriber registered mail id......")
    // BackendService.deleteGivenSubsciber(id)
    //  .then(response=>{
    //   alert(response.data);
    //   init();
      
    //  })
    //  .catch((error) => {
    //     console.log("Something went wrong", error);
    //   });

}
const AtiveSubscr=(id)=>{
  BackendService.blockGivenSubsciber(id)
      .then(response=>{
       alert(response.data);
      init();
      
      })
      .catch((error) => {
         console.log("Something went wrong", error);
       });

}
const InactiveSubscr=(id)=>{
  BackendService.unblockGivenSubsciber(id)
  .then(response=>{
   alert(response.data);
  init();
  
  })
  .catch((error) => {
     console.log("Something went wrong", error);
   });

}

  return (
<div>

<br/>
        <br/>
        <center><h2 style={{color:"red"}}>Seller Data!!!</h2></center>
        <br/>
        <br/>
            <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              
            <th>Name</th>
                                    <th>State</th>
                                    <th>Subscription Date</th>
                                    <th>Status</th>
                                    
                                    <th>Action</th>
                                    <th>Action</th>
                                    <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
        data.map(resp=>(
              <tr key={resp.id}>
                <td> {resp.subscrName}</td>
                                   <td> {resp.state}</td>
                                   <td> {resp.subscrDate}</td>
                                   <td>{resp.status}</td>
                                  
                                   <td> <button onClick={()=>MessageSubscr(resp.id)} value={resp.id}  className="btn btn-danger">Message</button></td>
                                   <td> <button onClick={()=>AtiveSubscr(resp.id)} value={resp.id}  className="btn btn-danger">InActive</button></td>
                                   <td> <button onClick={()=>InactiveSubscr(resp.id)} value={resp.id}  className="btn btn-danger">Active</button></td>
             
             
              </tr>
            ))
          
          }
              </tbody>
        </table>
        <center>
        <Link to="/admindash">
                <Button variant="info" type="submit">
                Back
                </Button>
                </Link>
                </center>
    
    </div>
  )
}

export default Admin

