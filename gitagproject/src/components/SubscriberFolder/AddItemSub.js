import React from 'react';
import './Add.css';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
//import {  useHistory, useParams } from "react-router-dom";
import BackendService from '../../service/BackendService';
import Navbar from '../Navbar';
import { useHistory } from 'react-router-dom';
function AddItemSub() {
  let sid=localStorage.getItem('userId');
   const [prodname, setprodname] = useState("");
   const [producDesc, setproducDesc] = useState("");
   const [prodqty, setprodqty] = useState("");
   const [price, setprice] = useState("");
  // const [categ, setCategory] = useState();
   const [subcateg, setsubCategory] = useState('');
   const[imgname,setimagename]= useState("");
   const[image, setImage] = useState('');
  const[categoryArr,setCategoryArr]=useState([]);
  const[subcategoryArr,setSubCategoryArr]=useState([]);
 // const [imageData,setImageData]=useState("");
  let {productdata} = useParams();
  const history=useHistory();
//  // const[jsondata,setJsondata]=useState({
//     sid:localStorage.getItem('userId'),
//     prodname:'',
//     producDesc:'',
//     prodqty:'',
//     price:'',
//     imgname:'',
//     //catg: '',
//     subcatg:''
//   });
 

  const init = () => {
    BackendService.getAllCatg() //employeeService chi getAll() here we are calling
      .then(response => {
        console.log('getting all categories', response.data);
        setCategoryArr(response.data);
                      //response madhe je tumche details yetayt te setEmployees mule employees[]
                                 //madhe add hotayt
                                 })
      .catch(error => {
        console.log('Something went wrong', error);
      }) 
  }
  useEffect(() => {
    init();
  }, []);

  const GetSubCategory=(e)=>{
    console.log("in getsub catg");
    //e.preventDefault();
    BackendService.getSubCat(e)
    .then((response) => {
      console.log("sub category items", response.data);
      setSubCategoryArr(response.data);
      
    })
    .catch((error) => {
      console.log("something went wrong", error);
    });
  }

  const addProduct=(e)=>
  {
    e.preventDefault();
    const product = {sid,prodname,producDesc,prodqty,price,subcateg,imgname};
    productdata=JSON.stringify(product); //js object
    console.log("dataof product form "+productdata);
    const imageData=new FormData();
    console.log("in add product");
    imageData.append('jsonobject',productdata);
    imageData.append('file',image);
    
    BackendService.addProduct(imageData)
    .then((response) => {
      console.log("item added succesfully");
      history.push("/optionsToSubscriber")
    })
    .catch((error) => {
      console.log("something went wrong", error);
    });
  }

  return <div>
      <Navbar/>
      <div className='addtopDiv'></div>
      <div className="addinner"><h3>Add Product</h3></div>
      <div className="addcenter">
        
      <div className='addtopDiv'>
        
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
    <label for="exampleFormControlSelect1">Category</label>
    <select class="form-control" 
    
    value={categoryArr.categName} 
    onChange={(e) => GetSubCategory(e.target.value)} 
     >
   {/*  value={school} onChange={e => setSchool(e.target.value)} */}
    {
        categoryArr.map((catg,key)=>(
         /*  <option key={key} value={catg.id} > {catg.categName} </option> */
          <option key={key} /* id="jsondata.catg" */ value={catg.id} > {catg.categName} </option>
          ))
    }
   
    </select>
  </div>
</div>
<div className="col-sm-12 col-md-6">
  <div class="form-group">
    <label for="exampleFormControlSelect1">Sub Category</label>
    <select class="form-control" onClick={(e)=>setsubCategory(e.target.value)} >
    {
        subcategoryArr.map(subcat=>(
          <option value={subcat.id} 
          > {subcat.subCategName}</option>
          ))
          /* onSelect={(e)=>setJsondata({...jsondata,subcatg:subcatg})} */
          
    }
    </select>
  </div>
</div>
</div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description</label>
    <textarea class="form-control" 
    rows="3"
    id="producDesc" 
    value={producDesc}
    onChange={(e) => setproducDesc(e.target.value)}></textarea>

  </div>
  
 
  <div className="row">

 
<div className="col-sm-12 col-md-4">
  <div class="form-group">
    <label for="exampleFormControlInput1">Image Name</label>
    <input type="text" class="form-control" 
     id="imgname" 
     value={imgname}
    onChange={(e) => setimagename(e.target.value)}
    placeholder="enter image name"/>
    </div>
    </div>

    <div className="col-sm-12 col-md-4">
  <div class="form-group">
    <label for="exampleFormControlInput1">Quantity</label>
    <input type="number" class="form-control" 
     id="prodqty" 
     value={prodqty}
     onChange={(e) => setprodqty(e.target.value)} 
    placeholder="enter quantity"/>
    </div>
  </div>

  <div className="col-sm-12 col-md-4">
  <div class="form-group">
    <label for="exampleFormControlInput2">Choose File</label>
    <input type="file" class="form-control" 
    id="image" 
    files = {image}
    onChange = {(e) => setImage(e.target.files[0])}
    placeholder="choose your file"/>
  </div>
  </div>
  </div>
  
 
  <div className="col-sm-12 col-md-12">
  <button onClick={(e) => addProduct(e)} className="btn btn-primary">
            Add Product
          </button>
       </div>
     
</form>

      </div>
        </div>
  </div>;
}

export default AddItemSub;
