import React, {useEffect, useState } from 'react';
import './SubscriberOptions.css';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import modifyItembySubscr from './ModifyItemSub';
import BackendService from '../../service/BackendService';
import NavbarSub from './NavbarSub';
function SubscriberOptions() {
  let sid=localStorage.getItem('userId');
const [productArr,setProductArr]=useState([]);
let count=1;
const init = () => {
BackendService.getProductDataTosubscriber(sid)
.then(response => {
  console.log('getting all product details', response.data);
  setProductArr(response.data); 
})                            
.catch(error => {
  console.log('Something went wrong', error);
}) 
}
useEffect(() => {
  init();
}, []);

  return <div>
      <NavbarSub/>
     
     
       
     <br/>
     <br/>
    
     
     <center> <h4>Select any option to connect us</h4>
     <div className="row">

      <div className='col-sm-12 col-md-6'>
      <Link to="/addItembySubscr">
      <button type="button" name="addBtn" className="btn btn-info text-left">&nbsp;&nbsp;&nbsp;Add Product&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
      </Link>
      </div> 
      <div className='col-sm-12 col-md-6'>
        <Link to="/accountInfoSub/:id">
      <button type="button" name="feedBtn" className="btn btn-info text-right">&nbsp;&nbsp;&nbsp;&nbsp;Account Info&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
      </Link>
      </div>
    </div>
    </center>
      <br/>
     <center>
        <div style={{width:"50%"}}>
      <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Image</th>
              <th>Choose</th>
             
              
            </tr>
          </thead>
          <tbody>
          {
            productArr.map(prod=>(
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.prodname}</td>
                <td>{prod.producDesc}</td>
                <td>{prod.prodqty}</td>
                <td>{prod.price}</td>
                <td><img src={`data:image/jpeg;base64,${prod.data}`} width="50px" alt={prod.name}/></td>
               
                <td>
                <Link to= {`/modifyItembySubscr/${prod.id}`}>
                <Button variant="info" type="submit">
                Modify
                </Button>
                </Link>
                </td>
               
               
              </tr>
            ))
          
          }
              </tbody>
        </table>
        </div>
        </center>
</div>


}

export default SubscriberOptions;
