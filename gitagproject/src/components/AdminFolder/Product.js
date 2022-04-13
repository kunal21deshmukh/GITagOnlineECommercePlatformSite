import React from 'react'
import BackendService from '../../service/BackendService';
import { Link } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import { useEffect, useState  } from 'react';
function Product() {
    const [data,setData]=useState([]);
    const init = () => {
  
        BackendService.getAllProductsInfo()
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
        <center><h2 style={{color:"red"}}>Product Data!!!</h2></center>
        <br/>
        <br/>
        <center>
        <div style={{width:"700px",height:"500px"}}>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              
            <th>Product Name</th>
                                    <th>Seller Name</th>
                                    <th>Category Name</th>
                                    <th>Subcategory Name</th>
                                    <th>Price</th>
                                    
                                   
                                    <th>Qty</th>
            </tr>
          </thead>
          <tbody>
          {
        data.map(resp=>(
              <tr key={resp.id}>
                <td> {resp.prodname}</td>
                                   <td> {resp.subscriber.subscrName}</td>
                                   <td> {resp.categ.categName}</td>
                                   <td>{resp.subcateg.subCategName}</td>
                                   <td>{resp.price}</td>
                                  
                                 
                                   <td>{resp.prodqty}</td>
                                  
              </tr>
            ))
          
          }
              </tbody>
        </table>
        <Link to="/admindash">
                <Button variant="info" type="submit">
                Back
                </Button>
                </Link>
        </div>
        </center>
       
    </div>
  )
}

export default Product