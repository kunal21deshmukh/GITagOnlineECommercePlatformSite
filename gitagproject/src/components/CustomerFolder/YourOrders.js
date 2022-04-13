import React from 'react'
import Navbar from '../Navbar'
//import './YourOrder.css';
import { useEffect, useState  } from 'react';
import { Link ,useHistory } from 'react-router-dom';
import BackendService from '../../service/BackendService';
//import background from '../subcatimages/agarbatti.jpg';
function YourOrders() {
    let cid=localStorage.getItem('userId');
   //const abc=new URL("../subcatimages/agarbatti.jpg",import.meta.url)
    const history =useHistory();
    const [data,setData]=useState([]);
    const [differ,setDiffer]=useState("");
    const[d,setD] =useState("");
    useEffect(() => {
  
        BackendService
          .getPlacedOrderData(cid)
          .then(response => {
            
            console.log("your data -->"+response.data.orderData[0].difference);
            /* {
            response.data.orderData.map(c=>{
                //alert(c.orderData.custName);
               setRespArr(c.orderData);
               alert(respArr);
            }) */
            //set the data
            setData(response.data.orderData);
          setD(response.data.orderData[0].difference);
           
        
         
        
            
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });
      
    }, []);
    //alert(d);
const feedBackSubmit=(id,nm)=>{
  
       
          history.push({
            pathname: '/feedback',
            state: { subscrId: id,prdnm:nm },
            
          });
          
   
  
}
if(localStorage.getItem('userId')  )
{
  return (
    <div >
     <Navbar/>
     <div className="orderBack">
     

<br/>
<br/>

{
          data.map(resp=>(
        <div className="container l-form">
    <div className="row">
        <div className=" col-lg-5 col-md-7 mx-auto">
            <div className="panel border bg-white">
                <div className="panel-heading">
                    <h3 className="pt-3 font-weight-bold">Order Details</h3>
                </div>
                <div className="panel-body p-3">
                    <center>
                    <center><h5 className="pt-3 font-weight-bold">Hello,{resp.custName}</h5></center>
                        <table>
                    <tbody>
         
        
            
            
           
            <tr><td>Product Name:</td> <td>{resp.prodName}</td></tr>
            <tr><td>Product Quntity:</td> <td>{resp.qty}</td></tr>
            <tr><td>Total cost:</td> <td>{resp.tcost}</td></tr>
            <tr><td>Order Date:</td> <td>{resp.orderDate}</td></tr>
            <tr><td>Product Name:</td> <td>{resp.mode}</td></tr>
            <tr><td>Delivery Address:</td> <td>{resp.deliveryAddr}</td></tr>
           
           
            

          
        </tbody>
        </table>
        <center><h6 className="pt-3 font-weight-bold">{resp.deliveryMsg}</h6></center>
                    </center>
                    
                  
                  
                    <div className="btn btn-primary btn-block mt-3"   onClick={() => feedBackSubmit(resp.subscriberId,resp.prodName)}  >feedback</div> 
                    
                   
          
                    
                </div>
              
            </div>
        </div>
    </div>
</div>
)
          )
        } 
        </div>
    </div>
  )
      }
      else if(localStorage.getItem('userId'))
      {
        return (
          <div>
           <Navbar/>
           <div className="orderBack">
      
      <br/>
      <br/>
      
      {
                data.map(resp=>(
              <div className="container l-form">
          <div className="row">
              <div className=" col-lg-5 col-md-7 mx-auto">
                  <div className="panel border bg-white">
                      <div className="panel-heading">
                          <h3 className="pt-3 font-weight-bold">Order Details</h3>
                      </div>
                      <div className="panel-body p-3">
                          <center>
                          <center><h5 className="pt-3 font-weight-bold">Hello,{resp.custName}</h5></center>
                              <table>
                          <tbody>
               
              
                  
                  
                 
                  <tr><td>Product Name:</td> <td>{resp.prodName}</td></tr>
                  <tr><td>Product Quntity:</td> <td>{resp.qty}</td></tr>
                  <tr><td>Total cost:</td> <td>{resp.tcost}</td></tr>
                  <tr><td>Order Date:</td> <td>{resp.orderDate}</td></tr>
                  <tr><td>Product Name:</td> <td>{resp.mode}</td></tr>
                  <tr><td>Delivery Address:</td> <td>{resp.deliveryAddr}</td></tr>
                 
                 
                  
      
                
              </tbody>
              </table>
              <center><h6 className="pt-3 font-weight-bold">{resp.deliveryMsg}</h6></center>
                          </center>       
                      </div>
                  </div>
              </div>
          </div>
      </div>
      )
                )
              } 
              
          </div>
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


export default YourOrders