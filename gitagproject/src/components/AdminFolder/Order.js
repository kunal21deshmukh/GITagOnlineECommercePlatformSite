import React from 'react'
import BackendService from '../../service/BackendService';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useState  } from 'react';

function Order() {


    const [data,setData]=useState([]);
    const init = () => {
  
        BackendService.getAllOrderInfo()
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


  return (
    <div>
        <br/>
        <br/>
        <center><h2 style={{color:"red"}}>Order Data!!!</h2></center>
        <br/>
        <br/>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              
                                    <th>Customer Name</th>
                                   
                                    <th>Order date</th>
                                    <th>Delivery date</th>
                                    <th>Mode of payment</th>
                                    <th>Total Amount</th>
                                    
                                   
                                   
            </tr>
          </thead>
          <tbody>
          {
        data.map(resp=>(
              <tr key={resp.id}>
                <td> {resp.custo.custName}</td>
                                 
                                   <td> {resp.orderDate}</td>
                                   <td>{resp.deliveryDate}</td>
                                   <td>{resp.modeOfpay}</td>
                                   <td>{resp.totalAmount}</td>
                                 
                              
                                  
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

export default Order