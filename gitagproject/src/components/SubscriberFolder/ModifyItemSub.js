import React from 'react';
import './Modify.css';
import { useEffect, useState } from 'react';
import BackendService from '../../service/BackendService';
import {  useHistory, useParams } from "react-router-dom";
import Navbar from '../Navbar';
function ModifyItemSub() {
  const [prodname, setprodname] = useState("");
   const [producDesc, setproducDesc] = useState("");
   const [prodqty, setprodqty] = useState("");
   const [price, setprice] = useState("");
   const {id} = useParams();
   const history = useHistory();
   const product = {id,prodname,producDesc,prodqty,price};
   useEffect(() => {
   
      BackendService
        .getProductData(id) 
        .then((product) => {
          setprodname(product.data.prodname);
          setproducDesc(product.data.producDesc);
          setprodqty(product.data.prodqty);
          setprice(product.data.price);
          
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    
  }, []);

const UpdateProduct=(e)=>{
  e.preventDefault();
  
  BackendService
  .updateProd(product)
  .then((response) => {
    console.log("product details updated successfully", response.data);
    history.push("/optionsToSubscriber");
  })
  .catch((error) => {
    console.log("something went wrong", error);
  });
}

  return <div>
      <Navbar/>
    <div className='topDiv'></div>
      <div className="center">

      <form>
       <div className="row">
        <div className="col-sm-12 col-md-6">
        <div class="form-group">
        <label for="exampleFormControlInput1">Product Name</label>
        <input type="text" class="form-control" 
        id="prodname" 
        value={prodname}
        onChange={(e) => setprodname(e.target.value)}
        placeholder="enter product name"/>
       </div>
       </div>
      <div className="col-sm-12 col-md-6">
      <div class="form-group">
      <label for="exampleFormControlInput1">Product Price</label>
      <input type="text" class="form-control" 
      id="price" 
      value={price}
      onChange={(e) => setprice(e.target.value)}
      placeholder="enter product price"/>
      </div>
      </div>
      </div>
    <div className="row">
    <div className="col-sm-12 col-md-6">
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" 
    rows="3"
    id="producDesc" 
    value={producDesc}
    onChange={(e) => setproducDesc(e.target.value)}></textarea>

    </div>
    </div>

    <div className="col-sm-12 col-md-6">
    <div class="form-group">
    <label for="exampleFormControlInput1">Quantity</label>
    <input type="number" class="form-control" 
     id="prodqty" 
     value={prodqty}
     onChange={(e) => setprodqty(e.target.value)} 
    placeholder="enter quantity"/>
    </div>
  </div>
  </div>
 

 
{/* <div className="row">
 <div className="col-sm-12 col-md-6">
  <div class="form-group">
    <label for="exampleFormControlInput1">Image Name</label>
    <input type="text" class="form-control" 
     id="imgname" 
     value={imgname}
    onChange={(e) => setimagename(e.target.value)}
    placeholder="enter image name"/>
    </div>
    </div>
  <div className="col-sm-12 col-md-6">
  <div class="form-group">
    <label for="exampleFormControlInput2">Choose File</label>
    <input type="file" class="form-control" 
    id="image" 
    files = {image}
    onChange = {(e) => setImage(e.target.files[0])}
    placeholder="choose your file"/>
  </div>
  </div>
  </div> */}
  
 
  <div className="col-sm-12 col-md-12">
    <button onClick={(e) => UpdateProduct(e)} className="btn btn-primary">
            Update Product Info
          </button>
       </div>
     
</form>

        </div>
  </div>;
}

export default ModifyItemSub;
